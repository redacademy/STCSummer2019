import React, {Component} from 'react';
import Item from './Item';
import {withNavigation} from 'react-navigation';

class ItemContainer extends Component {
  render() {
    return <Item />;
  }
}

export default withNavigation(ItemContainer);
