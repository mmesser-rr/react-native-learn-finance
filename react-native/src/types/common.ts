export type PodType = 'spending' | 'investments' | 'savings';

export type AthletesWealth = {
  id: string,
  email: string,
  wealthBalance: number,
  index?: number,
  up?: number
}

export type QRCode = {
  id: string,
  learnId: string,
  depositNum: number,
  wealthPointAmount?: number,
  rewardAmount?: number,
  itemName?: string,
  eventName?: string
  limitCount?: number,
  usedCount?: number
}

export type RewardData = {
  isEvent: boolean,
  isValidQrCode: boolean,
  wealthBalance: number,
  message: string
}

export type Exercise = {
  id: string,
  exerciseId: string,
  studentEmail: string,
  answer: string,
  reward: number,
  approveDecline: boolean,
  isChecked: boolean,
  isShowed: boolean,
};

export enum LearnKind {
  LEARN,
  EXERCISE
}
