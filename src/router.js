import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Splash from './container/Splash';
import Login from './container/Login';
import Home from './container/Home';

export const AppNavigator = StackNavigator({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Home: { screen: Home },
});

const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);