export interface ICreateRewardStatus {
  athleteId: string;
  rewardItemId: string;
};

export interface IUpdateRewardStatusById {
  id: string;
  redeemed: boolean;
};