import React, { Component } from 'react';
import Brand from './Brand'
import PropTypes from 'prop-types';
class BrandContainer extends Component {
  static navigationOptions = {
    title: 'Brand',
  };
  render() {
    const { navigation } = this.props;
    const brand = navigation.getParam('brand');
    return (
      <Brand brand={brand} />
    );
  }
}
BrandContainer.propTypes = {
  navigation: PropTypes.object.isRequired

}
export default BrandContainer;

