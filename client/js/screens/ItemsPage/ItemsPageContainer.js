import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ItemsPage from './ItemsPage';

export default class ItemsPageContainer extends Component {
  render() {
    return (
      <View>
        <ItemsPage />
      </View>
    );
  }
}
