import React from 'react';
import {Text, View, Image, Fragment} from 'react-native';
import styles from './styles';

const ItemList = ({item}) => {
  return (
    <View style={styles.fullItem}>
      <Image style={styles.itemImage} source={{uri: item.images[0]}} />
      <Text style={styles.itemText}>
        {item.title}-{item.brand.title}
      </Text>
    </View>
  );
};

export default ItemList;
