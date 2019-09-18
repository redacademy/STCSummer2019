import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FaveItemsContext from '../../context/FaveItemsContext';

const ItemList = ({item, navigation}) => (
  <FaveItemsContext.Consumer>
    {({faveItemIds, removeFaveItem, createFaveItem}) => {
      return (
        <View style={styles.fullItem}>
          {item.discount ? (
            <View style={styles.itemDiscountContainer}>
              <Text style={styles.itemDiscount}>-{item.discount}%</Text>
            </View>
          ) : null}
          <View style={styles.imageHeartContainer}>
            {console.log(item)}
            <View style={styles.itemImageContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('singleItem', {item: item});
                }}>
                <Image
                  resizeMode="cover"
                  source={{uri: item.images[0]}}
                  style={styles.itemImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.heartContainer}>
              <TouchableOpacity
                onPress={() => {
                  faveItemIds.includes(item.id)
                    ? removeFaveItem(item.id)
                    : createFaveItem(item.id);
                }}>
                {faveItemIds.includes(item.id) ? (
                  <Image
                    style={styles.itemHeart}
                    resizeMode="cover"
                    source={require('../../assets/icons/activeheart.png')}
                  />
                ) : (
                  <Image
                    style={styles.itemHeart}
                    resizeMode="cover"
                    source={require('../../assets/icons/inactiveheart.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('singleItem', {item: item});
            }}>
            <Text style={styles.itemText}>
              {item.title} - {item.brand.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }}
  </FaveItemsContext.Consumer>
);

export default ItemList;
