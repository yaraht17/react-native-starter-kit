import { NavigationActions } from 'react-navigation';
import AppNavigator from '../../router';
const initState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}