import React, { Component } from 'react';
import Item from './Item';
import { withNavigation } from 'react-navigation';

class ItemContainer extends Component {
  render() {
    const item = this.props.navigation.state.params.item;
    return <Item item={item} />;
  }
}

export default withNavigation(ItemContainer);
