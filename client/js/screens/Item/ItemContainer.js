import React, { Component } from 'react';
import Item from './Item';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
class ItemContainer extends Component {
  render() {
    const item = this.props.navigation.state.params.item;
    return <Item item={item} />;
  }
}
ItemContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
}
export default withNavigation(ItemContainer);
