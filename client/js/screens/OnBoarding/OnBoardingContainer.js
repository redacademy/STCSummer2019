import React, {Component} from 'react';
import OnBoarding from './OnBoarding';
import {withNavigation} from 'react-navigation';

const OnBoardingContainer = () => {
  return <OnBoarding navigation={this.props.navigation} />;
};

export default withNavigation(OnBoardingContainer);
