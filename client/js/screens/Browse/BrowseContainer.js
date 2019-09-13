import React, {Component} from 'react';
import Browse from './Browse';
import {withNavigation} from 'react-navigation';
import {categories} from '../../config/BrowseItemData';

class BrowseContainer extends Component {
  static navigationOptions = {
    title: 'Shop This City',
  };
  render() {
    return <Browse navigation={this.props.navigation} data={categories} />;
  }
}

export default withNavigation(BrowseContainer);
