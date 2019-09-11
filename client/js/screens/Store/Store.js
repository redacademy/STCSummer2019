import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import Geocoder from 'react-native-geocoding';
import {API_KEY} from 'react-native-dotenv';

const Store = ({store}) => {
  Geocoder.init(API_KEY);

  Geocoder.from(store.address)
    .then(json => {
      var location = json.results[0].geometry.location;
      console.log(location);
    })
    .catch(error => console.warn(error));

  return (
    <FaveStoresContext.Consumer>
      {({faveStoreIds, removeFaveStore, createFaveStore}) => {
        return (
          <View>
            <Text>Store Page</Text>
            <Text>{store.title}</Text>
            <Text>{store.address}</Text>
            <TouchableOpacity
              onPress={() => removeFaveStore(store.id)}
              activeOpacity={0.5}>
              <Text>Remove From Faves</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => createFaveStore(store.id)}
              activeOpacity={0.5}>
              <Text>Add To Faves</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </FaveStoresContext.Consumer>
  );
};

export default Store;
