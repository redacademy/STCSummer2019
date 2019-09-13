import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import ItemStoreCard from '../../components/ItemStoreCard';
import FaveItemsContext from '../../context/FaveItemsContext';
import { createFaveItem } from '../../config/models/favedItems';
import PropTypes from 'prop-types';
class Item extends Component {
  getSizeValues = item => {
    const sizeobj = item.size
      .reverse()
      .map(size => ({ label: size, value: size }));
    return sizeobj;
  };

  getColorValues = item => {
    const colorobj = item.color
      .reverse()
      .map(color => ({ label: color, value: color }));
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
    const { item } = this.props;
    return (
      <FaveItemsContext.Consumer>
        {
          ({ faveItemIds, removeFaveItem, createFaveItem }) => {
            return (
              <ScrollView>
                <ImageCarousel style={styles.carousel} images={item.images} id={item.id} faveIds={faveItemIds} createFave={createFaveItem} deleteFave={removeFaveItem} />
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
                        placeholder={{ label: 'Size', value: '', color: 'black' }}
                        style={pickerStyle}
                      />
                    </View>
                    <View style={styles.dropdown}>
                      <RNPickerSelect
                        onValueChange={value => console.log(value)}
                        items={this.getColorValues(item)}
                        placeholder={{ label: 'Color', value: '', color: 'black' }}
                        style={pickerStyle}
                      />
                    </View>
                  </View>
                </View>
                {item.stores.map(store => (
                  <ItemStoreCard key={store.id} store={store} item={item} />
                ))}
              </ScrollView>
            )
          }
        }
      </FaveItemsContext.Consumer>
    );
  }
}

Item.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    brand: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    stores: PropTypes.array.isRequired
  })
}
export default Item;