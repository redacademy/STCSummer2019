import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props;
    console.log(item);
    const images = item.images;
    return (
      <View>
        <ImageCarousel images={item.images} />
      </View>
    );
  }
}
