import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
<<<<<<< HEAD

const StoreCard = ({store, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('store', {store})}>
=======
import PropTypes from 'prop-types';
const StoreCard = ({ store, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('store', { store })}>
>>>>>>> develop
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
          source={{uri: `${store.storeLogo}`}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      {navigation.state.routeName === 'sale' ? (
        <View style={styles.storeContentContainer}>
          <Text style={styles.storeTitle}>{store.title}</Text>
          <Text style={styles.storeContent}>
            Sale on {store.saledescription} - {store.sale}% off
          </Text>
        </View>
      ) : (
        <View style={styles.storeContentContainer}>
          <Text style={styles.storeTitle}>{store.title}</Text>
          <Text style={styles.storeContent}>{store.address}</Text>
          <Text style={styles.storeContent}>{store.phone}</Text>
        </View>
      )}
    </View>
  </TouchableOpacity>
);

StoreCard.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string.isRequired,
    storeLogo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
  }),
  navigation: PropTypes.object.isRequired
}

export default StoreCard;
