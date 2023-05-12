import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import { log, analyticsLog } from 'src/utils/functions';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  log('content', `Navigating to ${name}`);
  analyticsLog(`Navigating_to_${name}`);
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
