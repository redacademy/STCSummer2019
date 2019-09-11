import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import styles from './styles';

const StoreCard = ({store, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('store', {store})}>
<<<<<<< HEAD
    <View
      style={
        store.storelink
          ? styles.partnerStoreCardContainer
          : styles.storeCardContainer
      }>
      {store.storelink ? (
        <View style={styles.partnerImageContainer}>
          <Image
            source={require('../../assets/icons/partner-active3x.png')}
            resizeMode="cover"
            style={styles.partnerImage}
          />
        </View>
      ) : null}
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${store.images}`}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.storeContentContainer}>
        <Text style={styles.storeTitle}>{store.title}</Text>
        <Text style={styles.storeContent}>{store.address}</Text>
        <Text style={styles.storeContent}>{store.phone}</Text>
=======
    <View style={styles.storeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          //   source={{uri: `${store.images}`}}
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.storeContentContainer}>
        <Text>{store.title}</Text>
        <Text>{store.address}</Text>
        <Text>{store.phone}</Text>
>>>>>>> develop
      </View>
    </View>
  </TouchableOpacity>
);

export default StoreCard;
