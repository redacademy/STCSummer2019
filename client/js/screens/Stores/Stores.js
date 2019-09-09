import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StoreCard from '../../components/StoreCard'

const Stores = ({ stores, navigation }) => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('brands')}
        >
          <Text>Brands</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={stores}
        renderItem={({ item }) => <StoreCard store={item} navigation={navigation} />}
      />
    </View>
  );
};

export default Stores;
