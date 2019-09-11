import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Store from '../../screens/Store/Store';

const ItemStoreCard = ({ store, item }) => {
  const onSale = !!(store.sale > 0 && item.styles === store.saledescription)
  return (
    <View style={styles.storeCardContainer}>
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
          {onSale ?
            <Text style={styles.itemPrice}>${item.price * (1 - store.sale / 100)}</Text>
            :
            <Text style={styles.itemPrice}>${item.price}</Text>
          }
          <View style={styles.storeSizes}>
            <Text style={styles.sizeStyle}>Sizes:</Text>
            {item.size.map(sizes => (
              <Text key={sizes} style={styles.sizeStyle}>
                {sizes}
              </Text>
            ))}
          </View>
        </View>
        {onSale &&
          <View>
            <Text>SALE</Text>
          </View>
        }
      </View>
    </View>
  );
};

export default ItemStoreCard;
