import { Athlete } from 'src/types/API';

export interface IUserSlice {
  isLoggedIn: boolean;
  user?: Athlete;
  userId?: string;
  token?: string;
  loginError?: string;
  userNotFound?: boolean;
}

