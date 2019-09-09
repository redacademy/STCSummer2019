import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Brands = ({
  brands, navigation
}) => (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('stores')}
        >
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Brands</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={brands}
        renderItem={({ item }) => (<TouchableOpacity
          onPress={() => navigation.navigate('brand', { brand: item })}
        ><Text>{item.title}</Text><Text>    >></Text></TouchableOpacity>)}
      />
    </View>
  );

export default Brands;
