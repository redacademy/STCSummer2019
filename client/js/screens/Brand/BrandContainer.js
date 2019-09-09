import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Brand from './Brand'
class BrandContainer extends Component {
  render() {
    const { navigation } = this.props;
    const brand = navigation.getParam('brand');
    return (
      <Brand brand={brand} />
    );
  }
}

export default BrandContainer;
