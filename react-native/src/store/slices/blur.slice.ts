/* Onboarding Reducer
 * handles state during onboarding
 */
import { createSlice } from "@reduxjs/toolkit";

interface IBlur {
  isBlur: boolean
}

const initialState: IBlur = {
  isBlur: false,
};

const blurSlice = createSlice({
  name: "blur",
  initialState,
  reducers: {
    enableBlur(state) {
      state.isBlur = true;
    },
    disableBlur(state) {
      state.isBlur = false;
    },
  }
});

export const { enableBlur, disableBlur } = blurSlice.actions;

export default blurSlice.reducer;