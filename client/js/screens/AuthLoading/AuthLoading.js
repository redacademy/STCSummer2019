import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.navigateUser();
  }

  navigateUser = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoadingScreen;