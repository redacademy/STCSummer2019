import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const ItemList = ({item}) => {
  return (
    <View>
      <Image style={styles.itemImage} source={{uri: item.images[0]}} />
      <Text>
        {item.title}-{item.brand.title}
      </Text>
    </View>
  );
};

export default ItemList;
