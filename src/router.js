import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Splash from './container/Splash';
import Login from './container/Login';
import Home from './container/Home';

export const AppNavigator = StackNavigator({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Home: { screen: Home },
});

export default AppNavigator;