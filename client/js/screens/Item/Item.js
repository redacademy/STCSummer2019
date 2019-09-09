import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import ItemStoreCard from '../../components/ItemStoreCard';

export default class Item extends Component {
  getSizeValues = item => {
    const sizeobj = item.size
      .reverse()
      .map(size => ({label: size, value: size}));
    return sizeobj;
  };

  getColorValues = item => {
    const colorobj = item.color
      .reverse()
      .map(color => ({label: color, value: color}));
    return colorobj;
  };

  render() {
    const pickerStyle = {
      inputIOS: {
        color: 'black',
        textAlign: 'center',
      },
      placeholderColor: 'black',
    };
    const {item} = this.props;
    console.log(item);
    return (
      <ScrollView>
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
                placeholder={{label: 'Size', value: '', color: 'black'}}
                style={pickerStyle}
              />
            </View>
            <View style={styles.dropdown}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                items={this.getColorValues(item)}
                placeholder={{label: 'Color', value: '', color: 'black'}}
                style={pickerStyle}
              />
            </View>
          </View>
        </View>
        {item.stores.map(store => (
          <ItemStoreCard key={store.id} store={store} item={item} />
        ))}
      </ScrollView>
    );
  }
}
