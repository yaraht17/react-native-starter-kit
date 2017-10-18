/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from './src/router';
import { Provider, connect } from 'react-redux';
import store from './src/store';
import { addNavigationHelpers } from 'react-navigation'
const AppRedux = ({ dispatch, navigation }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation
    })} />
);

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const AppWithNavigationState = connect(mapStateToProps)(AppRedux);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
