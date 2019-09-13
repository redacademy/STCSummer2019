import React, { Component } from 'react';
import Browse from './Browse';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
class BrowseContainer extends Component {
  static navigationOptions = {
    title: 'Shop This City',
  };
  render() {
    return <Browse navigation={this.props.navigation} />;
  }
}
BrowseContainer.propTypes = {
  navigation: PropTypes.object.isRequired

}
export default withNavigation(BrowseContainer);
