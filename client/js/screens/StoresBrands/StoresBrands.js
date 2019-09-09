import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StoreCard from '../../components/StoreCard'
const StoresBrands = ({ stores, brands, navigation, displayStores, displayBrands, displayPage }) => {


  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => displayStores()}
        >
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => displayBrands()}
        >
          <Text>Brands</Text>
        </TouchableOpacity>
      </View>
      {displayPage ?
        <FlatList
          data={stores}
          renderItem={({ item }) => <StoreCard store={item} navigation={navigation} />}
        /> :
        <FlatList
          data={brands}
          renderItem={({ item }) => (<TouchableOpacity
            onPress={() => navigation.navigate('brand', { brand: item })}
          ><Text>{item.title}</Text><Text>    >></Text></TouchableOpacity>)}
        />
      }
    </View>
  );

};

export default StoresBrands;
