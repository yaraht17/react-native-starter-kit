import { NavigationActions } from 'react-navigation';
import Root from '../config/Router';

const initState = Root.router.getStateForAction(NavigationActions.init());

export default (state = initState, action) => {
  const nextState = Root.router.getStateForAction(action, state);
  return nextState || state;
}