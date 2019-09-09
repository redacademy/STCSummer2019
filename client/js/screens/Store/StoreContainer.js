import React, { Component } from 'react';
import Store from './Store';

export default class StoreContainer extends Component {
  render() {
    const { navigation } = this.props;
    const store = navigation.getParam('store');
    return (
      <Store store={store} />
    );
  }
}
