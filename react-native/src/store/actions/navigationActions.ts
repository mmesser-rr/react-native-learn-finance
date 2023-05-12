/*
 * Reducer actions related with navigation
 */
import { IUpdateActiveRouteNameRequestState } from 'src/models/actions/navigation';
import NavigationService from 'src/navigation/NavigationService';

import * as types from './types';

export function navigateToHome(params: any) {
  NavigationService.navigate('Home', params);
}

export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('ForgotPassword', params);
}

export function updateActiveRouteName(activeRouteName: string): IUpdateActiveRouteNameRequestState {
  return {
    type: types.UPDATE_ACTIVE_ROUTE_NAME,
    activeRouteName
  };
}
