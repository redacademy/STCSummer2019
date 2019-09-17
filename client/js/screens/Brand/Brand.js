import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import FaveBrandsContext from '../../context/FaveBrandsContext';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';
import StoreCard from '../../components/StoreCard';
import {withNavigation, NavigationEvents} from 'react-navigation';
import ItemsPage from '../ItemsPage';
import PropTypes from 'prop-types';

const Brand = ({brand, navigation}) => {
  return (
    <FaveBrandsContext.Consumer>
      {({faveBrandIds, removeFaveBrand, createFaveBrand}) => {
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
                    navigation.navigate('brandItems', {
                      brandItems: brand.items,
                    })
                  }>
                  <Text style={styles.linkText}>See more items</Text>
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

Brand.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    stores: PropTypes.array.isRequired,
  }),
};

export default withNavigation(Brand);
