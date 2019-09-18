import React, { Component } from 'react';
import Browse from './Browse';
import PropTypes from 'prop-types';
import { categories } from '../../config/BrowseItemData';

class BrowseContainer extends Component {
  static navigationOptions = {
    title: 'Shop This City',
  };
  render() {
    return <Browse navigation={this.props.navigation} data={categories} />;
  }
}
BrowseContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default BrowseContainer;
