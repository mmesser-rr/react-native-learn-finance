import { GraphQLResult } from "@aws-amplify/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
import { STORAGE_PASSWORD_KEY, STORAGE_EMAIL_KEY, STORAGE_REMEMBER_ME_KEY, STORAGE_TOKEN } from "src/config/data";

import {
  createAthleteActivity as CREATE_ATHLETE_ACTIVITY_MUTATION,
  increaseSessionsCount as INCREASE_SESSIONS_COUNT_MUTATION,
  increaseTotalMinutesInApp as INCREASE_TOTAL_MINUTES_IN_APP,
  updateAthleteActivity as UPDATE_ATHLETE_ACTIVITY_MUTATION
} from "src/graphql/mutations";
import { getAthlete, listQRCodes } from "src/graphql/queries";
import { ILoginRequest, IUpdateWealthBalance, IUpdateAllWagered } from "src/models/actions/user";
import { IUserSlice } from "src/models/slices/user";
import NavigationService from "src/navigation/NavigationService";
import { Athlete, AthleteActivity, CreateAthleteActivityMutation, CreateAthleteActivityMutationVariables, GetAthleteQuery, GetAthleteQueryVariables, UpdateAthleteActivityMutation, UpdateAthleteActivityMutationVariables, ListQRCodesQuery } from "src/types/API";
import { boundObject, graphqlApi } from "src/utils/functions";
import { AsyncThunkConfig } from "..";
import { disableLoader, enableLoader } from "./loading.slice";
import { setEmail } from "./athlete.slice";
import { getExerciseList } from "./exerciseList.slice";
import { getQrCodes } from "./qrCodes.slice"; 
import { clearOnboardingState, setVerifyingStatusThunk } from "./onboarding.slice";
import { QRCode } from "src/types/common";

const initialState: IUserSlice = {
  isLoggedIn: false,
  user: undefined,
  userId: undefined,
  token: undefined
};

export const loginRequest = createAsyncThunk<void, ILoginRequest, AsyncThunkConfig>(
  "user/loginRequest",
  async ({ email, password, rememberMe }, { dispatch, getState }) => {
    console.log ('login request')
    
    dispatch(enableLoader());
    dispatch(clearUserState());
    // dispatch(clearOnboardingState());

    try {
      const loginResponse = await Auth.signIn({ username: email, password });
      console.log('Sign In Response: ', loginResponse);
      const token = loginResponse.signInUserSession.accessToken.jwtToken;
      const id = loginResponse.username;
      dispatch(loginSuccess({ id, token }));

      console.log('test after login email ', email)
      // store login form data to AsyncStorage
      await AsyncStorage.setItem(STORAGE_EMAIL_KEY, email);
      await AsyncStorage.setItem(STORAGE_PASSWORD_KEY, password);
      await AsyncStorage.setItem(STORAGE_REMEMBER_ME_KEY, rememberMe ? '1' : '0');
      await AsyncStorage.setItem(STORAGE_TOKEN, token);

      dispatch(setEmail(email))
      try {
        // fetch athlete data
        const athleteResponse = await graphqlApi(
          getAthlete,
          { id } as GetAthleteQueryVariables
        ) as GraphQLResult<GetAthleteQuery>;

        const athlete = athleteResponse.data?.getAthlete as Athlete | undefined;
        if (!athlete) {
          throw new Error('No user found with id: ' + id);
        }

        let updatedAthleteActivity: AthleteActivity;

        // increase login count
        if (athlete.activity) {
          const response = await graphqlApi(
            UPDATE_ATHLETE_ACTIVITY_MUTATION, {
              input: {
                id: id,
                loginCount: (athlete.activity?.loginCount || 0) + 1
              }
            } as UpdateAthleteActivityMutationVariables
          ) as GraphQLResult<UpdateAthleteActivityMutation>;

          updatedAthleteActivity = response.data?.updateAthleteActivity as AthleteActivity;
        }
        else {
          const response = await graphqlApi(
            CREATE_ATHLETE_ACTIVITY_MUTATION, {
              input: {
                id: id,
                loginCount: 1,
                activePeriodInMinutes: 0,
                wealthBalance: 0
              }
            } as CreateAthleteActivityMutationVariables
          ) as GraphQLResult<CreateAthleteActivityMutation>;

          updatedAthleteActivity = response.data?.createAthleteActivity as AthleteActivity;
        }

        athlete.activity = updatedAthleteActivity;
        dispatch(updateUser(athlete));

        // appUsageLog
        const sessionsCount = await graphqlApi(INCREASE_SESSIONS_COUNT_MUTATION);
        console.log("🚀 ~ file: user.slice.ts ~ line 101 ~ sessionsCount", sessionsCount);

        dispatch(setVerifyingStatusThunk(false));
        NavigationService.navigate('LastStepWelcome');
      } catch (err) {
        console.log('Error attempting to fetch Athlete info:', err);
      }
    } catch (error: any) {
      console.log('Login attempt failed:', error);
      let msg = '';
      let userNotFound: boolean | undefined;
      switch (error.message) {
        case 'Username should be either an email or a phone number.':
        case 'Password did not conform with policy: Password not long enough':
        case 'User is not confirmed.':
          msg = error.message;
          break;
        case 'Incorrect username or password.':
          msg = 'The email and password do not match. Please try again.';
          break;
        case 'User does not exist.':
          userNotFound = true;
          break;
        default:
          msg = error.message;
      }
      dispatch(loginFailed({ msg, userNotFound }));
    }

    //load qrcodes
    try {
      const response = await graphqlApi(listQRCodes) as GraphQLResult<ListQRCodesQuery>;
      let qrcodeList: QRCode[] = []
      if (response.data?.listQRCodes?.items && response.data?.listQRCodes?.items.length > 0) {
          qrcodeList = response.data?.listQRCodes?.items.map(e => {
              return {
                  id: e?.id,
                  learnId: e?.learnId,
                  depositNum: e?.depositNum,
                  wealthPointAmount: e?.wealthPointAmount,
                  rewardAmount: e?.rewardAmount,
                  itemName: e?.itemName,
                  eventName: e?.eventName,
                  limitCount: e?.limitCount,
                  usedCount: e?.usedCount
              } as QRCode 
          })
      }
      dispatch(getQrCodes(qrcodeList))
    } catch(err) {
      console.log('graphql list qrcodes query error: ', err)
    }
    dispatch(disableLoader());
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    dispatch(enableLoader());
    try {
      const logoutResponse = await Auth.signOut();
      console.log('Logout Response:');
      console.log(logoutResponse);

      dispatch(clearUserState());
      dispatch(clearOnboardingState());
      dispatch(updateUser(undefined));
      NavigationService.navigate('UserLoginStack', { screen: 'UserLogin' });
    } catch (error) {
      console.log('Error attempting to log out:', error);
    }
    dispatch(disableLoader());
  }
);

export const updateWealthBalance = createAsyncThunk<number | undefined, IUpdateWealthBalance, AsyncThunkConfig>(
  "user/updateWealthBalance",
  async ({ wealthBalance }, { getState }) => {
    try {
      const athleteId = getState().user.user?.id || "";
      const response = await graphqlApi(
        UPDATE_ATHLETE_ACTIVITY_MUTATION, {
          input: {
            id: athleteId,
            wealthBalance: wealthBalance || 0
          }
        } as UpdateAthleteActivityMutationVariables
      ) as GraphQLResult<UpdateAthleteActivityMutation>;

      return response.data?.updateAthleteActivity?.wealthBalance as number;
    } catch (error) {
      console.log('Error attempting to load events:', JSON.stringify(error));
    }
  }
);

export const updateAllWagered = createAsyncThunk<number | undefined, IUpdateAllWagered, AsyncThunkConfig>(
  "user/updateAllWagered",
  async ({ allWagered }, { getState }) => {
    try {
      const athleteId = getState().user.user?.id || "";
      const response = await graphqlApi(
        UPDATE_ATHLETE_ACTIVITY_MUTATION, {
          input: {
            id: athleteId,
            allWagered: allWagered || 0
          }
        } as UpdateAthleteActivityMutationVariables
      ) as GraphQLResult<UpdateAthleteActivityMutation>;

      return response.data?.updateAthleteActivity?.allWagered as number;
    } catch (error) {
      console.log('Error attempting to load events:', JSON.stringify(error));
    }
  }
);

export const increaseActivePeriodInMinutes = createAsyncThunk<number | undefined | null, number, AsyncThunkConfig>(
  "user/increaseActivePeriodInMinutes",
  async (seconds, { getState }) => {
    const { id, activity } = getState().user.user || {};
    try {
      const response = await graphqlApi(
        UPDATE_ATHLETE_ACTIVITY_MUTATION, {
          input: {
            id: id,
            activePeriodInMinutes: (activity?.activePeriodInMinutes || 0) + (seconds || 1)
          }
        } as UpdateAthleteActivityMutationVariables
      ) as GraphQLResult<UpdateAthleteActivityMutation>;
  
      // appUsageLog
      await graphqlApi(INCREASE_TOTAL_MINUTES_IN_APP, { byAmountInSeconds: seconds });
  
      return response.data?.updateAthleteActivity?.activePeriodInMinutes;
    } catch(err) {
      console.log('increase act6ive period in minutes error: ', err)
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.userId = action.payload.id;
      state.token = action.payload.token;
      state.loginError = "";
    },
    loginFailed(state, action) {
      state.loginError = action.payload.msg;
      state.userNotFound = action.payload.userNotFound;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    clearUserState(state) {
      boundObject(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateWealthBalance.fulfilled, (state, action) => {
        if (state.user?.activity) {
          state.user.activity.wealthBalance = action.payload || 0;
        }
      })
      .addCase(updateWealthBalance.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(updateAllWagered.fulfilled, (state, action) => {
        if (state.user?.activity) {
          state.user.activity.allWagered = action.payload || 0;
        }
      })
      .addCase(updateAllWagered.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      })
      .addCase(increaseActivePeriodInMinutes.fulfilled, (state, action) => {
        if (state.user?.activity) {
          state.user.activity.activePeriodInMinutes = action.payload || 0;
        }
      })
      .addCase(increaseActivePeriodInMinutes.rejected, (_state, { error }) => {
        console.error(error.name, error.message, error.stack);
      });
  }
});

export const { loginSuccess, loginFailed, updateUser, clearUserState } = userSlice.actions;

export default userSlice.reducer;