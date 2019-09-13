import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import FaveBrandsContext from '../../context/FaveBrandsContext';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import StoreCard from '../../components/StoreCard';
import {withNavigation, NavigationEvents} from 'react-navigation';
import ItemsPage from '../ItemsPage';

const Brand = ({brand, navigation}) => {
  return (
    <FaveBrandsContext.Consumer>
      {({faveBrandIds, removeFaveBrand, createFaveBrand}) => {
        console.log(brand);
        return (
          <ScrollView>
            <ImageCarousel
              images={brand.images}
              id={brand.id}
              faveIds={faveBrandIds}
              createFave={createFaveBrand}
              deleteFave={removeFaveBrand}
            />
            <View style={styles.contentContainer}>
              <View style={styles.brandLinkContainer}>
                <Text style={styles.contentHeader}>{brand.title}</Text>
                <TouchableOpacity
                  style={styles.linkContainer}
                  onPress={() =>
                    navigation.navigate('brandItems', {brandItems: brand.items})
                  }>
                  <Text style={styles.linkText}>See More Items</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.content}>{brand.description}</Text>
              <Text style={styles.carryHeader}>
                Stores that carry this brand
              </Text>
            </View>
            {brand.stores.map(store => (
              <StoreCard key={store.id} store={store} navigation={navigation} />
            ))}
          </ScrollView>
        );
      }}
    </FaveBrandsContext.Consumer>
  );
};

export default withNavigation(Brand);
