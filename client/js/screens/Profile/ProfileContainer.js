import React, { Component } from 'react';
import Profile from './Profile';
import { withNavigation } from 'react-navigation';
import { createToken, deleteToken, queryToken } from "../../config/models/authentication"
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    }
  }
  static navigationOptions = {
    title: 'My Profile',
  };
  getUser = async () => {
    const userToken = await queryToken('userToken');
    console.log(userToken.userId)
    this.setState({ userId: userToken.userId })
  }
  componentDidMount() {
    this.getUser()
  };
  render() {
    return <Profile userId={this.state.userId} />;
  }
}

export default ProfileContainer;
