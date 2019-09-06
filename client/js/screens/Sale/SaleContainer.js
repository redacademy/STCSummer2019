import React, {Component} from 'react';
import Sale from './Sale';
import {withNavigation} from 'react-navigation';

class SaleContainer extends Component {
  static navigationOptions = {
    title: 'Sale',
  };
  render() {
    return <Sale />;
  }
}

export default SaleContainer;
