import { Athlete } from 'src/types/API';

export interface ILoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginSuccess {
  id: string;
  token: string;
}

export interface ILoginFailed {
  errorMessage: string;
  userNotFound?: boolean;
}

export interface IUserUpdate {
  update: Partial<Athlete>;
}

export interface IGetUserByPhone {
  phone: string;
}

export interface IUpdateWealthBalance {
  wealthBalance: number;
};

export interface IUpdateAllWagered {
  allWagered: number;
};

export interface ICreateAthleteActivity {
  athleteId: string;
}