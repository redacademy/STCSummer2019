import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import styles from './styles'

const StoreCard = ({
  store, navigation
}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('store', { store })}
    >
      <View style={styles.storeCardContainer}>
        <View style={styles.imageContainer}>
          <Image
            //   source={{uri: `${store.images}`}}
            source={{ uri: 'https://via.placeholder.com/150' }}
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
    </TouchableOpacity>
  );


export default StoreCard;
