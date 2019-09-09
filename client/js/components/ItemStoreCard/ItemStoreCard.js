import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Store from '../../screens/Store/Store';

const ItemStoreCard = ({store, item}) => {
  console.log(item);
  //

  return (
    <View style={styles.storeCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          //source={{uri: store.storeLogo}}
          //   source={{
          //     uri:
          //       'https://www.google.com/search?q=ami+boutique&sxsrf=ACYBGNTcRBY8OJ4-xNPVLEbFhR1NwNwPnQ:1568066708621&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi2y5rZ38TkAhUCHzQIHUCmBLoQ_AUIEygD&biw=1440&bih=789#imgrc=9Ao-RixSurtdpM:',
          //   }}
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
            <Text style={styles.sizeStyle}> {sizes} </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ItemStoreCard;
