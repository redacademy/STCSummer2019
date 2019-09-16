import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Settings from './Settings';

class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    return (
      <View>
        <Settings />
      </View>
    );
  }
}

export default SettingsContainer;
