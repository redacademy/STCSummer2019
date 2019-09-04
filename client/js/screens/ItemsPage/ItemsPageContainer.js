import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ItemsPage from './ItemsPage';
import {withNavigation} from 'react-navigation';

class ItemsPageContainer extends Component {
  static navigationOptions = {
    title: 'TODO: Article variable(item.title)',
  };
  render() {
    return <ItemsPage />;
  }
}

export default withNavigation(ItemsPageContainer);
