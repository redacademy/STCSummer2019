import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const ItemStoreCard = ({ store, item, navigation }) => {
  const onSale = !!(store.sale > 0 && item.styles === store.saledescription);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('store', { store })}>
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
            source={{ uri: store.storeLogo }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.storeContentContainer}>
          <View style={styles.storeMeta}>
            <Text style={styles.storeTitle}>{store.title}</Text>
            {onSale ? (
              <Text style={styles.itemPrice}>
                ${item.price * (1 - store.sale / 100)}
              </Text>
            ) : (
                <Text style={styles.itemPrice}>${item.price}</Text>
              )}
            <View style={styles.storeSizes}>
              <Text style={styles.sizeStyle}>Sizes:</Text>
              {item.size.map(sizes => (
                <Text key={sizes} style={styles.sizeStyle}>
                  {sizes}
                </Text>
              ))}
            </View>
          </View>
          {onSale && (
            <View>
              <Text>SALE</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemStoreCard.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
    brands: PropTypes.array,
    images: PropTypes.array.isRequired,
    storeLogo: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    hours: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    sale: PropTypes.number.isRequired,
    saledescription: PropTypes.string,
    storelink: PropTypes.bool,
  }),
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.array.isRequired,
  }),
};

export default ItemStoreCard;
