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
              {/* <Text>{store.storeLogo}</Text> */}
              <Text>{store.title}</Text>
              <Text>{store.address}</Text>
              <Text>{store.phone}</Text>
            </View>
          )
        }

      }
    </FaveStoresContext.Consumer>
  );

export default StoreCard;
