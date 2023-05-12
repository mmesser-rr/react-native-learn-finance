import { QRCode, RewardData } from "src/types/common";

export interface qrCodeState {
    qrcodeList: Array<QRCode>,
    rewardData: RewardData
}