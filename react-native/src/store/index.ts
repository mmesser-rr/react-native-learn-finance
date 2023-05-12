import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";

import { SearchableSortDirection } from "src/types/API";
import loadingSliceReducer from "./slices/loading.slice";
import onboardingSliceReducer from "./slices/onboarding.slice";
import navigationSliceReducer from "./slices/navigation.slice";
import userSliceReducer from "./slices/user.slice";
import learnSliceReducer from "./slices/opportunities/learn.slice";
import eventSliceReducer from "./slices/opportunities/event.slice";
import rewardSliceReducer from "./slices/opportunities/reward.slice";
import athleteSliceReducer from "./slices/athlete.slice";
import qrcodeSliceReducer from "./slices/qrCodes.slice";
import exerciseSliceReducer from "./slices/exerciseList.slice";
import blurSliceReducer from "./slices/blur.slice";
import proposalSliceReducer from "./slices/proposal.slice";

export const store = configureStore({
  reducer: {
    learn: learnSliceReducer,
    event: eventSliceReducer,
    reward: rewardSliceReducer,
    onboarding: onboardingSliceReducer,
    loading: loadingSliceReducer,
    user: userSliceReducer,
    navigation: navigationSliceReducer,
    athlete: athleteSliceReducer,
    qrcode: qrcodeSliceReducer,
    exercise: exerciseSliceReducer,
    blur: blurSliceReducer,
    proposal: proposalSliceReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })/* .concat(logger), */
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncThunkConfig = {
  state: RootState,
  dispatch: AppDispatch;
};
export const createSortConfig = (fieldEnum: any) => {
  return {
    sort: [{
      direction: SearchableSortDirection.desc,
      field: fieldEnum
    }]
  };
};

export const createAscSortConfig = (fieldEnum: any) => {
  return {
    sort: [{
      direction: SearchableSortDirection.asc,
      field: fieldEnum
    }]
  };
};
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
