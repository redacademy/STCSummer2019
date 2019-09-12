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
          style={
            displayPage
              ? styles.topNavTitleContainer
              : styles.topNavTitleContInactive
          }
          onPress={() => displayStores()}>
          <Text style={styles.navTitle}>Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            displayPage
              ? styles.topNavTitleContInactive
              : styles.topNavTitleContainer
          }
          onPress={() => displayBrands()}>
          <Text style={styles.navTitle}>Brands</Text>
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
              <Text style={styles.brandTitle}>{item.title}</Text>
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
