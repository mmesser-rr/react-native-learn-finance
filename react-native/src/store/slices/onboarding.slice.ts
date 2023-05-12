/* Onboarding Reducer
 * handles state during onboarding
 */
import { GraphQLResult } from "@aws-amplify/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createAthlete as CREATE_ATHLETE_MUTATION } from "src/graphql/mutations";
import { IOnboardingState } from "src/models/slices/onboarding";
import { Athlete, CreateAthleteMutation, CreateAthleteMutationVariables } from "src/types/API";
import { boundObject, graphqlApi } from "src/utils/functions";
import { AsyncThunkConfig } from "..";
import { disableLoader, enableLoader } from "./loading.slice";
import { loginRequest, updateUser } from "./user.slice";

const initialState: IOnboardingState = {
  athleteId: "",
  email: '',
  password: '',
  verifying: false
};

export const addAthleteOnly = createAsyncThunk<void, void, AsyncThunkConfig>(
  "onboarding/addAthleteOnly",
  async (_, { dispatch, getState }) => {
    dispatch(enableLoader());
    const onboardingState = getState().onboarding as IOnboardingState;
    const mutationInput: CreateAthleteMutationVariables = {
      input: {
        id: onboardingState.athleteId,
        firstName: "",
        lastName: "",
        mobilePhone: "",
        email: onboardingState.email,
        isActive: true
      },
    };

    try {
      const response = await graphqlApi(CREATE_ATHLETE_MUTATION, mutationInput) as GraphQLResult<CreateAthleteMutation>;

      dispatch(updateUser(response.data?.createAthlete as Athlete));
      // NavigationService.navigate('UserLoginStack');
      dispatch(loginRequest({ email: onboardingState.email, password: onboardingState.password, rememberMe: false }));
    } catch (error) {
      console.log('Error attempting to create new Athlete:', error);
    }

    dispatch(disableLoader());
  }
);

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    updateOnboardingStatus(state, action: PayloadAction<IOnboardingState>) {
      boundObject(state, action.payload);
    },
    clearOnboardingState(state) {
      boundObject(state, initialState);
    },
    setVerifyingStatusThunk(state, action: PayloadAction<boolean>) {
      state.verifying = action.payload;
    }
  }
});

export const { updateOnboardingStatus, clearOnboardingState, setVerifyingStatusThunk } = onboardingSlice.actions;

export default onboardingSlice.reducer;