import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import ImageCarousel from '../../components/ImageCarousel'

const Store = ({ store }) => {
  return (
    <FaveStoresContext.Consumer>
      {
        ({ faveStoreIds, removeFaveStore, createFaveStore }) => {
          return (
            <View>
              <Text>Store Page</Text>
              <Text>{store.title}</Text>

              <ImageCarousel images={store.images} id={store.id} faveIds={faveStoreIds} createFave={createFaveStore} deleteFave={removeFaveStore} />
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
            </View>
          )
        }
      }
    </FaveStoresContext.Consumer >
  );
};

export default Store;
