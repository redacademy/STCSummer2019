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
            <ImageCarousel
              images={store.images}
              id={store.id}
              faveIds={faveStoreIds}
              createFave={createFaveStore}
              deleteFave={removeFaveStore}
            />
            <View style={styles.contentContainer}>
              <View>
                {console.log(store)}
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
          </View>
        );
      }}
    </FaveStoresContext.Consumer>
    //   {
    //     ({ faveStoreIds, removeFaveStore, createFaveStore }) => {
    //       return (
    //         <View>
    //           <Text>Store Page</Text>
    //           <Text>{store.title}</Text>

    //           <ImageCarousel images={store.images} id={store.id} faveIds={faveStoreIds} createFave={createFaveStore} deleteFave={removeFaveStore} />
    //           <TouchableOpacity
    //             onPress={() => removeFaveStore(store.id)}
    //             activeOpacity={0.5}
    //           >
    //             <Text >Remove From Faves</Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity
    //             onPress={() => createFaveStore(store.id)}
    //             activeOpacity={0.5}
    //           >
    //             <Text>Add To Faves</Text>
    //           </TouchableOpacity>
    //         </View>
    //       )
    //     }
    //   }
    // </FaveStoresContext.Consumer >
  );
};

export default Store;
