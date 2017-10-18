import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class Splash extends Component {
  componentDidMount() {
    setTimeout(this.gotoHome, 5000);
  }
  gotoHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Login',
          })
        ]
      })
    )
  }
  render() {
    return (
      <View>
        <Text>Splash</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})