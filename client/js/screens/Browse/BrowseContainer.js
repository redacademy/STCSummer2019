import React, {Component} from 'react';
import Browse from './Browse';
import {withNavigation} from 'react-navigation';

class BrowseContainer extends Component {
  static navigationOptions = {
    title: 'Shop This City',
  };
  render() {
    return <Browse navigation={this.props.navigation} />;
  }
}

export default withNavigation(BrowseContainer);
