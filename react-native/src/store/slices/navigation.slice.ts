/* Onboarding Reducer
 * handles state during onboarding
 */
import { createSlice } from "@reduxjs/toolkit";
import { IOpportunitiesStackParamList } from "src/types/opportunitiesRouterTypes";

interface INavigation {
  activeRouteName: keyof IOpportunitiesStackParamList;
}
const initialState = {
  activeRouteName: "OpportunitiesScreen"
} as INavigation;

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateActiveRouteName(state, action) {
      state.activeRouteName = action.payload;
    }
  }
});

export const { updateActiveRouteName } = navigationSlice.actions;

export default navigationSlice.reducer;