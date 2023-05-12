import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  VerifyEmailCode: undefined;
  LastStepWelcome: undefined;
  UserLoginStack: undefined;
  UserBankingStack: undefined;
  UniversalError: undefined;
  OpportunitiesStack: undefined;
  GetRewardFromQrCode: {userId: string, qrcodeId: string};
  Sheet: {url: string};
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
export type SignUpProps = {
  route: SignUpScreenRouteProp;
  navigation: SignUpScreenNavigationProp;
};

type VerifyEmailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VerifyEmailCode'>;
type VerifyEmailScreenRouteProp = RouteProp<RootStackParamList, 'VerifyEmailCode'>;
export type VerifyEmailProps = {
  route: VerifyEmailScreenRouteProp;
  navigation: VerifyEmailScreenNavigationProp;
};

type GetRewardFromQrCodeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GetRewardFromQrCode'>;
type GetRewardFromQrCodeScreenRouteProp = RouteProp<RootStackParamList, 'GetRewardFromQrCode'>;
export type GetRewardFromQrCodeProps = {
  route: GetRewardFromQrCodeScreenRouteProp;
  navigation: GetRewardFromQrCodeScreenNavigationProp;
};


type SheetScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Sheet'>;
type SheetScreenRouteProp = RouteProp<RootStackParamList, 'Sheet'>;
export type SheetProps = {
  route: SheetScreenRouteProp;
  navigation: SheetScreenNavigationProp;
};
