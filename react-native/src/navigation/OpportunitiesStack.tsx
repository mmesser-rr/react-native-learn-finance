import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Opportunities from 'src/screens/Opportunities';
import AboutEvent from 'src/screens/Opportunities/Event/AboutEvent';
import AskQuestionScreen from "src/screens/Opportunities/Learn/AskQuestionScreen";
import DepositsScreen from "src/screens/Opportunities/Learn/DepositsScreen";
import Exercise from 'src/screens/Opportunities/Learn/Exercise';
import ExerciseResult from 'src/screens/Opportunities/Learn/ExerciseResult';
import LearnbotScreen from 'src/screens/Opportunities/Learn/Learnbot';
import LearnVideo from 'src/screens/Opportunities/Learn/LearnVideo';
import QAScreen from "src/screens/Opportunities/Learn/QAScreen";
import QrCodeScreen from 'src/screens/Opportunities/Learn/QrCode';
import SnackScreen from 'src/screens/Opportunities/Learn/Snack';
import Redeem from 'src/screens/Opportunities/Reward/Redeem';
import ProposalTrack from 'src/screens/Opportunities/Voting/ProposalTrack';
import ProposalStatement from 'src/screens/Opportunities/Voting/ProposalStatement';
import ProposalGoal from 'src/screens/Opportunities/Voting/ProposalGoal';
import ActionVerb from 'src/screens/Opportunities/Voting/ActionVerb';
import SubmitProposal from 'src/screens/Opportunities/Voting/SubmitProposal';
import ProposalSubmitted from 'src/screens/Opportunities/Voting/ProposalSubmitted';
import VotingSubmitted from 'src/screens/Opportunities/Voting/VotingSubmitted';
import VotingScreen from 'src/screens/Opportunities/Voting/VotingScreen';
import { IOpportunitiesStackParamList } from 'src/types/opportunitiesRouterTypes';

const Stack = createStackNavigator<IOpportunitiesStackParamList>();

const OpportunitiesStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="OpportunitiesScreen" screenOptions={{ headerShown: false, gestureEnabled: true }} detachInactiveScreens={false}>

      <Stack.Screen name="OpportunitiesScreen" component={Opportunities} />
      <Stack.Screen name="DepositsScreen" component={DepositsScreen} />
      <Stack.Screen name="QAScreen" component={QAScreen} />
      <Stack.Screen name="AskQuestionScreen" component={AskQuestionScreen} />
      <Stack.Screen name="LearnVideoScreen" component={LearnVideo} />
      <Stack.Screen name="ExerciseScreen" component={Exercise} initialParams={{ started: false }} options={{gestureEnabled: false}}/>
      <Stack.Screen name="ExerciseResultScreen" component={ExerciseResult} />
      <Stack.Screen name="RedeemScreen" component={Redeem} />
      <Stack.Screen name="AboutEventScreen" component={AboutEvent} />
      <Stack.Screen name="QrCodeScreen" component={QrCodeScreen} />
      <Stack.Screen name="SnackScreen" component={SnackScreen} />
      <Stack.Screen name="LearnbotScreen" component={LearnbotScreen} />
      <Stack.Screen name="ProposalTrackScreen" component={ProposalTrack} />
      <Stack.Screen name="ActionVerbScreen" component={ActionVerb} />
      <Stack.Screen name="ProposalStatementScreen" component={ProposalStatement} />
      <Stack.Screen name="ProposalGoalScreen" component={ProposalGoal} />
      <Stack.Screen name="SubmitProposalScreen" component={SubmitProposal} />
      <Stack.Screen name="ProposalSubmittedScreen" component={ProposalSubmitted} options={{gestureEnabled: false}}/>
      <Stack.Screen name="VotingSubmittedScreen" component={VotingSubmitted} options={{gestureEnabled: false}}/>
      <Stack.Screen name="VotingScreen" component={VotingScreen} />
    </Stack.Navigator>
  );
};

export default OpportunitiesStack;
