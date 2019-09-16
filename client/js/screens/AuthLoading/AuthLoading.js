import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader';
import PropTypes from 'prop-types';

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
      <Loader />
    );
  }
}
AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}
export default AuthLoadingScreen;