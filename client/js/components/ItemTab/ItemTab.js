import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { gql } from 'apollo-boost';
import FavesItemsContext from '../../context/FaveItemsContext';
import { Query } from 'react-apollo';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import Loader from '../Loader';

const GET_All_ITEMS = gql`
  {
    allItems {
      title
      tags
      styles
      stores {
        id
        title
        storelink
        brands {
          title
          id
          images
          description
        }
        images
        storeLogo
        categories
        hours
        address
        phone
        email
        website
        sale
        saledescription
      }
      size
      price
      newArrival
      images
      id
      discount
      color
      category
      brand {
        id
        title
        images
        description
      }
  }
}
`;

const ItemTab = ({ navigation }) => {
  return (
    <FavesItemsContext.Consumer>
      {({ faveItemIds }) => (
        <Query query={GET_All_ITEMS}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <Text>Error :(</Text>;
            if (data) {
              const itemData = data.allItems;
              const items = itemData.filter(
                item => faveItemIds && faveItemIds.includes(item.id),
              );

              return (
                <View style={styles.container}>
                  {items.length > 0 ? (
                    <ScrollView>
                      <View style={styles.favItemWrapper}>
                        {items.map(item => (
                          <View key={item.id} style={styles.subfavItemWrapper}>
                            <TouchableOpacity
                              style={styles.imgWrapper}
                              onPress={() => {
                                navigation.navigate('singleItem', {
                                  item: item,
                                });
                              }}>
                              <Image
                                resizeMode="cover"
                                source={{ uri: item.images[0] }}
                                style={styles.itemImage}
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
                            source={require('../../assets/icons/heart-dress.png')}
                          />
                        </View>
                        <Text style={styles.text}>
                          Build your personal catalogue
                      </Text>
                        <Text style={styles.subText}>
                          Start favouriting styles and clothes you like to build
                          your personal catalogue
                      </Text>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Browse');
                          }}>
                          <View style={styles.txtWrapper}>
                            <Text style={styles.browseTxt}> Browse Clothes </Text>
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
    </FavesItemsContext.Consumer>
  );
};

export default withNavigation(ItemTab);
