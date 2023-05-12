import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import LastStepWelcome from 'src/screens/LastStepWelcome';
import SignUp from 'src/screens/SignUp';
import UniversalError from 'src/screens/UniversalError';
import VerifyEmailCode from 'src/screens/VerifyEmailCode';
import Welcome from 'src/screens/Welcome';
import { RootStackParamList } from 'src/types/routerTypes';
import { navigationRef } from './NavigationService';
import OpportunitiesStack from './OpportunitiesStack';
import UserLoginStack from './UserLoginStack';
import GetRewardFromQrCode from 'src/screens/GetRewardFromQrCode';
import Sheet from 'src/screens/Sheet';

import { ActivityIndicator, Text } from 'react-native';
const linking = {
  prefixes: ['peoplesapp://'],
  config: {
    screens: {
      GetRewardFromQrCode: {
        path: 'qrcode/:userId/:qrcodeId'
      }
    }
  }
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  Text.defaultProps = Text.defaultProps || {}
  Text.defaultProps.allowFontScaling = false

  return (
    <NavigationContainer ref={navigationRef}
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}
    >
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
        />
        <RootStack.Screen name="VerifyEmailCode" component={VerifyEmailCode} />
        <RootStack.Screen name="LastStepWelcome" component={LastStepWelcome} />
        <RootStack.Screen name="UniversalError" component={UniversalError} />
        <RootStack.Screen name="UserLoginStack" component={UserLoginStack} />
        <RootStack.Screen name="GetRewardFromQrCode" component={GetRewardFromQrCode} />
        <RootStack.Screen name="Sheet" component={Sheet} />
        {/* Main app */}
        <RootStack.Screen name="OpportunitiesStack" component={OpportunitiesStack} options={{ gestureEnabled: false }} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
