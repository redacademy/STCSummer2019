import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Store from '../../screens/Store/Store';

const StoreCard = ({store}) => {
  return (
    <View style={styles.storeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${store.images}`}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.storeContentContainer}>
        <Text>{store.title}</Text>
        <Text>{store.address}</Text>
        <Text>{store.phone}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
