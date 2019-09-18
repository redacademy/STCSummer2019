import React, { Component } from 'react';
import OnBoarding from './OnBoarding';

class OnBoardingContainer extends Component {
  render() {
    return <OnBoarding
      navigation={this.props.navigation}
    />;
  }
};

export default OnBoardingContainer;
