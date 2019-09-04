import React, {Component} from 'react';
import Profile from './Profile';
import {withNavigation} from 'react-navigation';

class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return <Profile />;
  }
}

export default withNavigation(ProfileContainer);
