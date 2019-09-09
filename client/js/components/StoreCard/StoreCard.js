import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Store from '../../screens/Store/Store';

const StoreCard = ({store}) => {
  return (
    <View style={styles.storeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: store.storeLogo}}
          //source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.storeContentContainer}>
        <Text>{store.title}</Text>
        <Text style={styles.cardContent}>{store.address}</Text>
        <Text>{store.phone}</Text>
        {/* <Text>Store Title</Text>
        <Text>Store Address</Text>
        <Text>Store Phone</Text> */}
      </View>
    </View>
  );
};

export default StoreCard;
