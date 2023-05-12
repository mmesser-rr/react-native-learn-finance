/* Onboarding Reducer
 * handles state during onboarding
 */
import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "src/models/slices/loading";

const initialState: ILoading = {
  isLoading: false,
  isLoginLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    enableLoader(state) {
      state.isLoading = true;
    },
    disableLoader(state) {
      state.isLoading = false;
    },
    loginEnableLoader(state) {
      state.isLoginLoading = true;
    },
    loginDisableLoader(state) {
      state.isLoginLoading = false;
    }
  }
});

export const { enableLoader, disableLoader, loginEnableLoader, loginDisableLoader } = loadingSlice.actions;

export default loadingSlice.reducer;