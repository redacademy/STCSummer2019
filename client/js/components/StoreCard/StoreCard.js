import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';

const StoreCard = ({
  store
}) => (
    <FaveStoresContext.Consumer>
      {
        ({ faveStoreIds, removeFaveStore, createFaveStore }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => removeFaveStore(store.id)}
                activeOpacity={0.5}
              >

                <Text >Remove From Faves</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => createFaveStore(store.id)}
                activeOpacity={0.5}
              >

                <Text>Add To Faves</Text>
              </TouchableOpacity>
              <View style={styles.storeCardContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    // source={{ uri: `${store.images}` }}
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
            </View>
          )
        }

      }
    </FaveStoresContext.Consumer>
  );


export default StoreCard;
