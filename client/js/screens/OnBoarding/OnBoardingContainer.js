import React, {Component} from 'react';
import {View, Text} from 'react-native';
import OnBoarding from './OnBoarding';
import {withNavigation} from 'react-navigation';

class OnBoardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <OnBoarding navigation={this.props.navigation} />
      </View>
    );
  }
}

export default withNavigation(OnBoardingContainer);
