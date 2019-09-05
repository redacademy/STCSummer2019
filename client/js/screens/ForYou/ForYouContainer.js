import React, {Component} from 'react';
import ForYou from './ForYou';
import {withNavigation} from 'react-navigation';

class ForYouContainer extends Component {
  static navigationOptions = {
    title: 'New Arrivals in your Favourites',
  };
  render() {
    return <ForYou />;
  }
}

export default withNavigation(ForYouContainer);
