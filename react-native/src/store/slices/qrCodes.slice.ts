import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { qrCodeState } from "src/models/slices/qrcode";
import { RewardData } from "src/types/common";

const initialState: qrCodeState = {
    qrcodeList: [],
    rewardData: {} as RewardData
}

const qrCodeSlice = createSlice({
    name: "qrCode",
    initialState,
    reducers: {
        getQrCodes(state, action) {
            state.qrcodeList = action.payload;
        },
        updateRewardData(state, action) {
            state.rewardData = action.payload
        },
    }
})

export const { getQrCodes, updateRewardData } = qrCodeSlice.actions;
export default qrCodeSlice.reducer;