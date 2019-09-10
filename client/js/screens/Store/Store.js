import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';

const Store = ({ store }) => {
  return (
    <FaveStoresContext.Consumer>
      {
        ({ faveStoreIds, removeFaveStore, createFaveStore }) => {
          return (
            <View>
              <Text>Store Page</Text>
              <Text>{store.title}</Text>
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
    </FaveStoresContext.Consumer>
  );
};

export default Store;
