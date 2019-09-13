import React, { Component } from 'react';
import Store from './Store';
import PropTypes from 'prop-types';
class StoreContainer extends Component {
  static navigationOptions = {
    title: 'Store',
  };
  render() {
    const { navigation } = this.props;
    const store = navigation.getParam('store');
    return (
      <Store store={store} />
    );
  }
}
StoreContainer.propType = {
  navigation: PropTypes.object.isRequired
}

export default StoreContainer
