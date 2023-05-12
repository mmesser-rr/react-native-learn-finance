import Amplify from 'aws-amplify';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import awsconfig from 'src/aws-exports';
import Navigator from './navigation';
import { store } from './store';
import * as Sentry from "@sentry/react-native";

Amplify.configure(awsconfig);
LogBox.ignoreLogs([
  'Sending \`onAnimatedValueUpdate\` with no listeners registered.'
]);

Sentry.init({
  dsn: "https://@.ingest.sentry.io/",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const EntryPoint: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default Sentry.wrap(EntryPoint);
