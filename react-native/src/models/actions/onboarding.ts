import { IOnboardingState } from '../slices/onboarding';

export interface IOnboardingUpdate {
  type: String;
  update: Partial<IOnboardingState>;
}

export interface ICreateAthleteAndAccount {
  type: String;
  ssn: string;
}

export interface ICreateAthlete {
  type: String;
}
