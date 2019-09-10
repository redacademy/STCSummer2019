import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import StoreCard from '../../components/StoreCard';
import styles from './styles';
const StoresBrands = ({
  stores,
  brands,
  navigation,
  displayStores,
  displayBrands,
  displayPage,
}) => {
  return (
    <View>
      <View style={styles.topNavContainer}>
        <TouchableOpacity
          style={styles.topNavTitleContainer}
          onPress={() => displayStores()}>
          <Text>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topNavTitleContainer}
          onPress={() => displayBrands()}>
          <Text>Brands</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mapLinkContainer}
          onPress={() => {
            Linking.openURL('http://maps.apple.com/?ll=37.484847,-122.148386');
          }}>
          <Text style={styles.mapText}>Map View</Text>
        </TouchableOpacity>
      </View>
      {displayPage ? (
        <FlatList
          data={stores}
          renderItem={({item}) => (
            <StoreCard store={item} navigation={navigation} />
          )}
        />
      ) : (
        <FlatList
          style={styles.brandListContainer}
          data={brands}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.brandContainer}
              onPress={() => navigation.navigate('brand', {brand: item})}>
              <Text>{item.title}</Text>
              <View style={styles.arrowContainer}>
                <Image
                  source={require('../../assets/icons/forward-inactive2x.png')}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default StoresBrands;
