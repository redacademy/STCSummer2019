import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';

const StoreCard = ({
  store, navigation
}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('store', { store })}
    >
      <View>
        {/* <Text>{store.storeLogo}</Text> */}
        <Text>{store.title}</Text>
        <Text>{store.address}</Text>
        <Text>{store.phone}</Text>
      </View>
    </TouchableOpacity>
  );

export default StoreCard;
