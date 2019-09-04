import React, {Component} from 'react';
import Browse from './Browse';

export default class BrowseContainer extends Component {
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return <Browse item={item} navigation={this.props.navigation} />;
  }
}
