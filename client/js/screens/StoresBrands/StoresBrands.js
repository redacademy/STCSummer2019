import React from 'react';
import { View, Text, FlatList } from 'react-native';
import StoreCard from '../../components/StoreCard'

const StoresBrands = ({ stores, brands }) => {
  return (
    <View>
      <FlatList
        data={stores}
        renderItem={({ item }) => <StoreCard store={item} />}
      />
      <FlatList
        data={brands}
        renderItem={({ item }) => (<Text>{item.title}</Text>)}
      />
    </View>
  );
};

export default StoresBrands;
