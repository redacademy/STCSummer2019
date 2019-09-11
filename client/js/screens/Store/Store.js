import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FaveStoresContext from '../../context/FaveStoresContext';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';

const Store = ({store}) => {
  const weekdayHours = store.hours.split(', ')[0];
  const sundayHours = store.hours.split(', ')[1];
  return (
    <FaveStoresContext.Consumer>
      {({faveStoreIds, removeFaveStore, createFaveStore}) => {
        return (
          <View>
            <ImageCarousel images={store.images} id={store.id} />
            <View>
              <Text>{store.title}</Text>
              <TouchableOpacity
                style={styles.mapLinkContainer}
                onPress={() => {
                  Linking.openURL(
                    'http://maps.apple.com/?ll=37.484847,-122.148386',
                  );
                }}>
                <Text style={styles.mapText}>Map View</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.dayHoursContainer}> */}
            <View style={styles.daysContainer}>
              <Text>Mon-Sat</Text>
              <Text>Sun</Text>
            </View>
            <View style={styles.hoursContainer}>
              <Text>{weekdayHours}</Text>
              <Text>{sundayHours} </Text>
            </View>
            {/* </View> */}
          </View>
        );
      }}
    </FaveStoresContext.Consumer>
  );
};

export default Store;
