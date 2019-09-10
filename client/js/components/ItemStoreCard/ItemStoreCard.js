import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ItemStoreCard = ({store, item}) => {
  return (
    <View style={styles.storeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: store.storeLogo}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.storeContentContainer}>
        <Text>{store.title}</Text>
        <Text style={styles.cardContent}>${item.price}</Text>
        <View style={styles.storeSizes}>
          <Text style={styles.sizeStyle}>Sizes:</Text>
          {item.size.map(sizes => (
            <Text key={sizes} style={styles.sizeStyle}>
              {sizes}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemStoreCard;
