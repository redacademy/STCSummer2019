import React, {Component} from 'react';
import Profile from './Profile';
import {withNavigation} from 'react-navigation';

class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return (
      // <Query query={GET_ITEMS}>
      //   {({loading, error, data}) => {
      //     if (loading)
      //       return <ActivityIndicator size="large" style={styles.loader} />;
      //     if (error) return <Text>Error :(</Text>;
      //     if (data) {
      //       const profile = this.filterData(
      //         data.allUsers,
      //         this.props.navigation.state.params.category,
      //       );
      //       return <Profile allUsers={user} />;
      //     }
      //   }}
      <Profile />
    );
  }
}

export default ProfileContainer;
