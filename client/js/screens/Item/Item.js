import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';

export default class Item extends Component {
  getSizeValues = item => {
    const sizeobj = item.size.map(size => ({label: size, value: size}));
    return sizeobj;
  };

  getColorValues = item => {
    const colorobj = item.color.map(color => ({label: color, value: color}));
    return colorobj;
  };

  render() {
    const {item} = this.props;

    return (
      <View>
        <ImageCarousel style={styles.carousel} images={item.images} />
        <View style={styles.singleItem}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemBrand}>{item.brand.title}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTags}>Tags: {item.tags[0]}</Text>
          </View>
          <View style={styles.allDropdown}>
            <View style={styles.sizedropdown}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                items={this.getSizeValues(item)}
                placeholder={{label: 'Size', value: ''}}
              />
            </View>
            <View style={styles.dropdown}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                items={this.getColorValues(item)}
                placeholder={{label: 'Color', value: ''}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
