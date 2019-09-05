import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from './styles';

const ItemList = ({item}) => {
  return (
    <View style={styles.fullItem}>
      <ImageBackground style={styles.itemImage} source={{uri: item.images[0]}}>
        <Image
          style={styles.itemHeart}
          source={require('../../assets/inactiveheart.png')}
        />
      </ImageBackground>
      <Text style={styles.itemText}>
        {item.title}-{item.brand.title}
      </Text>
    </View>
  );
};

export default ItemList;
