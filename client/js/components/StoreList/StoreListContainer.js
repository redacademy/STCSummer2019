import React, {Component} from 'react';
import {Text, View} from 'react-native';
import StoreList from './StoreList';

export default class StoreListContainer extends Component {
  render() {
    return (
      <View>
        <StoreList />
      </View>
    );
  }
}
