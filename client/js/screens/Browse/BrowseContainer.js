import React, {Component} from 'react';
import Browse from './Browse';
import {withNavigation} from 'react-navigation';

class BrowseContainer extends Component {
  static navigationOptions = {
    title: 'Shop This City',
  };
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return <Browse item={item} navigation={this.props.navigation} />;
  }
}

export default withNavigation(BrowseContainer);
