import React, {Component} from 'react';
import OnBoarding from './OnBoarding';
import {withNavigation} from 'react-navigation';

class OnBoardingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <OnBoarding navigation={this.props.navigation} />;
  }
}

export default withNavigation(OnBoardingContainer);
