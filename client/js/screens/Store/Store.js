import React from 'react';
import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import ImageCarousel from '../../components/ImageCarousel';
import Geocoder from 'react-native-geocoding';
import {API_KEY} from 'react-native-dotenv';
import styles from './styles';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import {NavigationEvents, withNavigation} from 'react-navigation';

const Store = ({store, navigation}) => {
  const weekdayHours = store.hours.split(', ')[0];
  const sundayHours = store.hours.split(', ')[1];

  const MapCordinates = navigation => {
    Geocoder.init(API_KEY);

    return Geocoder.from(store.address)
      .then(json => {
        var location = json.results[0].geometry.location;
        navigation.navigate('map', {lat: location.lat, lng: location.lng});
      })
      .catch(error => console.warn(error));
  };

  return (
    <FaveStoresContext.Consumer>
      {({faveStoreIds, removeFaveStore, createFaveStore}) => {
        return (
          <ScrollView>
            <ImageCarousel
              images={store.images}
              id={store.id}
              faveIds={faveStoreIds}
              createFave={createFaveStore}
              deleteFave={removeFaveStore}
            />
            <View style={styles.contentContainer}>
              <View style={styles.storeMapContainer}>
                <Text style={styles.storeTitle}>{store.title}</Text>
                <TouchableOpacity
                  style={styles.mapLinkContainer}
                  onPress={() => MapCordinates(navigation)}>
                  <Text style={styles.mapText}>See Map</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.content}>{store.categories.join(', ')}</Text>

              <Text style={styles.contentHeaders}>Store Hours</Text>
              <View style={styles.dayHoursContainer}>
                <View style={styles.daysContainer}>
                  <Text style={styles.content}>Mon-Sat</Text>
                  <Text style={styles.content}>Sun</Text>
                </View>
                <View style={styles.hoursContainer}>
                  <Text style={styles.content}>{weekdayHours}</Text>
                  <Text style={styles.content}>{sundayHours} </Text>
                </View>
              </View>
              <View style={styles.contactInfoContainer}>
                <Text style={styles.contentHeaders}>Contact Information</Text>
                <Text style={styles.content}>{store.address}</Text>
                <Text style={styles.content}>{store.phone}</Text>
                <Text style={styles.content}>{store.email}</Text>
                <Text style={styles.content}>{store.website}</Text>
              </View>
            </View>
          </ScrollView>
        );
      }}
    </FaveStoresContext.Consumer>
  );
};
Store.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
    brands: PropTypes.array,
    images: PropTypes.array.isRequired,
    storeLogo: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    hours: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    sale: PropTypes.number.isRequired,
    saledescription: PropTypes.string,
    storelink: PropTypes.bool.isRequired,
  }),
};
export default withNavigation(Store);
