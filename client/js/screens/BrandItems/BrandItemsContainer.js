import React, { Component } from 'react';
import BrandItems from './BrandItems';

class BrandItemsContainer extends Component {
  render() {
    const brandItems = this.props.navigation.state.params.brandItems;
    return (
      <BrandItems allItems={brandItems} navigation={this.props.navigation} />
    );
  }
}

export default BrandItemsContainer;
