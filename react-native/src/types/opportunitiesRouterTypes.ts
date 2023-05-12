import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Quiz } from './API';

export type IOpportunitiesStackParamList = {
  OpportunitiesScreen: undefined;
  LearnVideoScreen: undefined;
  DepositsScreen: undefined;
  AskQuestionScreen: undefined;
  QAScreen: undefined;
  ExerciseScreen: { started: boolean, questions: Quiz[]; };
  ExerciseResultScreen: undefined;
  RedeemScreen: undefined;
  AboutEventScreen: undefined;
  QrCodeScreen: {data: any};
  SnackScreen: {learnId: string};
  LearnbotScreen: undefined;
  ProposalTrackScreen: undefined;
  ActionVerbScreen: undefined;
  ProposalStatementScreen: undefined;
  ProposalGoalScreen: undefined;
  SubmitProposalScreen: undefined;
  ProposalSubmittedScreen: undefined;
  VotingSubmittedScreen: undefined;
  VotingScreen: undefined;
};

// OpportunitiesScreen
type IOpportunitiesScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'OpportunitiesScreen'>;
type IOpportunitiesScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'OpportunitiesScreen'>;
export type IOpportunitiesScreenProps = {
  navigation: IOpportunitiesScreenNavigationProp;
  route: IOpportunitiesScreenRouteProp;
};

// DepositsScreen
type IDepositsScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'DepositsScreen'>;
type IDepositsScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'DepositsScreen'>;
export type IDepositsScreenProps = {
  navigation: IDepositsScreenNavigationProp;
  route: IDepositsScreenRouteProp;
};

// SnackScreen
type ISnackScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'SnackScreen'>;
type ISnackScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'SnackScreen'>;
export type ISnackScreenProps = {
  navigation: ISnackScreenNavigationProp;
  route: ISnackScreenRouteProp;
};

// VotingScreen
type IVotingScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'VotingScreen'>;
type IVotingScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'VotingScreen'>;
export type IVotingScreenProps = {
  navigation: IVotingScreenNavigationProp;
  route: IVotingScreenRouteProp;
};

// ProposalTrack Screen
type IProposalTrackScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'ProposalTrackScreen'>;
type IProposalTrackScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ProposalTrackScreen'>;
export type IProposalTrackScreenProps = {
  navigation: IProposalTrackScreenNavigationProp;
  route: IProposalTrackScreenRouteProp;
};

// ActionVerb Screen
type IActionVerbScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'ActionVerbScreen'>;
type IActionVerbScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ActionVerbScreen'>;
export type IActionVerbScreenProps = {
  navigation: IActionVerbScreenNavigationProp;
  route: IActionVerbScreenRouteProp;
};

// ProposalStatement Screen
type IProposalStatementScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'ProposalStatementScreen'>;
type IProposalStatementScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ProposalStatementScreen'>;
export type IProposalStatementScreenProps = {
  navigation: IProposalStatementScreenNavigationProp;
  route: IProposalStatementScreenRouteProp;
};

// ProposalGoal Screen
type IProposalGoalScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'ProposalGoalScreen'>;
type IProposalGoalScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ProposalGoalScreen'>;
export type IProposalGoalScreenProps = {
  navigation: IProposalGoalScreenNavigationProp;
  route: IProposalGoalScreenRouteProp;
};

// SubmitProposal Screen
type ISubmitProposalScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'SubmitProposalScreen'>;
type ISubmitProposalScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'SubmitProposalScreen'>;
export type ISubmitProposalScreenProps = {
  navigation: ISubmitProposalScreenNavigationProp;
  route: ISubmitProposalScreenRouteProp;
};

// ProposalSubmitted Screen
type IProposalSubmittedScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'ProposalSubmittedScreen'>;
type IProposalSubmittedScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ProposalSubmittedScreen'>;
export type IProposalSubmittedScreenProps = {
  navigation: IProposalSubmittedScreenNavigationProp;
  route: IProposalSubmittedScreenRouteProp;
};

// VotingSubmitted Screen
type IVotingSubmittedScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'VotingSubmittedScreen'>;
type IVotingSubmittedScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'VotingSubmittedScreen'>;
export type IVotingSubmittedScreenProps = {
  navigation: IVotingSubmittedScreenNavigationProp;
  route: IVotingSubmittedScreenRouteProp;
};

// LearnbotScreen
type ILearnbotScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'LearnbotScreen'>;
type ILearnbotScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'LearnbotScreen'>;
export type ILearnbotScreenProps = {
  navigation: ILearnbotScreenNavigationProp;
  route: ILearnbotScreenRouteProp;
};

// AskQuestionScreen
type IAskQuestionScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'AskQuestionScreen'>;
type IAskQuestionScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'AskQuestionScreen'>;
export type IAskQuestionScreenProps = {
  navigation: IAskQuestionScreenNavigationProp;
  route: IAskQuestionScreenRouteProp;
};

// QAScreen
type IQAScreenRouteProp = RouteProp<IOpportunitiesStackParamList, 'QAScreen'>;
type IQAScreenNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'QAScreen'>;
export type IQAScreenProps = {
  navigation: IQAScreenNavigationProp;
  route: IQAScreenRouteProp;
};

// LearnVideoScreen
type ILearnVideoRouteProp = RouteProp<IOpportunitiesStackParamList, 'LearnVideoScreen'>;
type ILearnVideoNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'LearnVideoScreen'>;
export type ILearnVideoProps = {
  navigation: ILearnVideoNavigationProp;
  route: ILearnVideoRouteProp;
};

// ExerciseScreen
type IExerciseRouteProp = RouteProp<IOpportunitiesStackParamList, 'ExerciseScreen'>;
type IExerciseNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ExerciseScreen'>;
export type IExerciseProps = {
  navigation: IExerciseNavigationProp;
  route: IExerciseRouteProp;
};

// ExerciseResultScreen
type IExerciseResultRouteProp = RouteProp<IOpportunitiesStackParamList, 'ExerciseResultScreen'>;
type IExerciseResultNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'ExerciseResultScreen'>;
export type IExerciseResultProps = {
  navigation: IExerciseResultNavigationProp;
  route: IExerciseResultRouteProp;
};

// QrCodeScreen
type IQrCodeRouteProp = RouteProp<IOpportunitiesStackParamList, 'QrCodeScreen'>;
type IQrCodeNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'QrCodeScreen'>;
export type IQrCodeProps = {
  navigation: IQrCodeNavigationProp;
  route: IQrCodeRouteProp;
};

// RedeemScreen
type IRedeemRouteProp = RouteProp<IOpportunitiesStackParamList, 'RedeemScreen'>;
type IRedeemNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'RedeemScreen'>;
export type IRedeemProps = {
  navigation: IRedeemNavigationProp;
  route: IRedeemRouteProp;
};

// AboutEventScreen
type IAboutEventRouteProp = RouteProp<IOpportunitiesStackParamList, 'AboutEventScreen'>;
type IAboutEventNavigationProp = StackNavigationProp<IOpportunitiesStackParamList, 'AboutEventScreen'>;
export type IAboutEventProps = {
  navigation: IAboutEventNavigationProp;
  route: IAboutEventRouteProp;
};