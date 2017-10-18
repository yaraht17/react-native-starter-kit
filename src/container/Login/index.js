import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Go to home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})