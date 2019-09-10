import React, {Component} from 'react';
import Profile from './Profile';
import {withNavigation} from 'react-navigation';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Loader from '../../components/Loader';
import {View, Text, Button} from 'react-native';

const GET_USER = gql`
  query allUsers($id: ID!) {
    allUsers(filter: {id: $id}) {
      email
      fullname
    }
  }
`;
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
  }
  static navigationOptions = {
    title: 'My Profile',
  };
  getUser = async () => {
    const userToken = await queryToken('userToken');
    this.setState({userId: userToken.userId});
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
      <Query query={GET_USER} variables={{id: this.state.userId}}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          return <Profile user={data.allUsers[0]} />;
        }}
      </Query>
    );
  }
}

export default ProfileContainer;
