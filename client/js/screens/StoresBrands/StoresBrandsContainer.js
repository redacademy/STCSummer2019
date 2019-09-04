import React, {Component} from 'react';
import StoresBrands from './StoresBrands';
import {withNavigation} from 'react-navigation';

class StoresBrandsContainer extends Component {
  static navigationOptions = {
    title: 'Stores & Brands',
  };
  render() {
    return <StoresBrands />;
  }
}

export default withNavigation(StoresBrandsContainer);
