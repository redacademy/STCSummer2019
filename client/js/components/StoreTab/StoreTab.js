import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {gql} from 'apollo-boost';
import FavesStoresContext from '../../context/FaveStoresContext';
import {Query} from 'react-apollo';
import styles from './styles';
import Loader from '../Loader';
import {withNavigation} from 'react-navigation';

const GET_All_STORES = gql`
  {
    allStores {
      id
      address
      categories
      storelink
      email
      hours
      images
      phone
      sale
      storeLogo
      title
      website
    }
  }
`;

const StoreTab = ({navigation}) => {
  return (
    <FavesStoresContext.Consumer>
      {({faveStoreIds}) => (
        <Query query={GET_All_STORES}>
          {({loading, error, data}) => {
            if (loading) return <Loader />;
            if (error) return <Text>Error :(</Text>;
            if (data) {
              const storesData = data.allStores;

              const stores = storesData.filter(
                store => faveStoreIds && faveStoreIds.includes(store.id),
              );

              return (
                <View style={styles.container}>
                  {stores.length > 0 ? (
                    <ScrollView>
                      <View style={styles.favItemWrapper}>
                        {stores.map(store => (
                          <View style={styles.subfavItemWrapper} key={store.id}>
                            <TouchableOpacity
                              style={styles.imgWrapper}
                              onPress={() =>
                                navigation.navigate('store', {store})
                              }>
                              <Image
                                resizeMode="contain"
                                source={{uri: store.storeLogo}}
                                style={styles.storeImage}
                              />
                            </TouchableOpacity>
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  ) : (
                    <View style={styles.container}>
                      <View style={styles.containerImg}>
                        <Image
                          style={styles.iconImg}
                          resizeMode="contain"
                          source={require('../../assets/icons/heart.png')}
                        />
                      </View>
                      <Text style={styles.text}>
                        Keep track of your favourite stores!
                      </Text>
                      <Text style={styles.subText}>
                        Favourite stores to get notifications of sales and new
                        arrivals !
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Stores&Brands')}>
                        <View style={styles.txtWrapper}>
                          <Text style={styles.browseTxt}>Browse Stores</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            }
          }}
        </Query>
      )}
    </FavesStoresContext.Consumer>
  );
};

export default withNavigation(StoreTab);
