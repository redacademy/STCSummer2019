import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Item from './Item';

export default class ItemContainer extends Component {
  render() {
    return (
      <View>
        <Item />
      </View>
    );
  }
}
