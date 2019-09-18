import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {gql} from 'apollo-boost';
import FavesBrandsContext from '../../context/FaveBrandsContext';
import {Query} from 'react-apollo';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Loader from '../Loader';

const GET_All_BRANDS = gql`
  {
    allBrands {
      id
      images
      title
      description
      items {
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
      stores {
        id
        address
        categories
        storelink
        email
        hours
        id
        images
        phone
        sale
        storeLogo
        title
        website
      }
    }
  }
`;
const BrandTab = ({navigation}) => {
  return (
    <FavesBrandsContext.Consumer>
      {({faveBrandIds}) => (
        <Query query={GET_All_BRANDS}>
          {({loading, error, data}) => {
            if (loading) return <Loader />;
            if (error) return <Text>Error :(</Text>;
            if (data) {
              const brandsData = data.allBrands;
              const brands = brandsData.filter(
                brand => faveBrandIds && faveBrandIds.includes(brand.id),
              );

              return (
                <View style={styles.container}>
                  {brands.length > 0 ? (
                    <ScrollView>
                      <View style={styles.favItemWrapper}>
                        {brands.map(brand => (
                          <View style={styles.subfavItemWrapper} key={brand.id}>
                            <TouchableOpacity
                              style={styles.imgWrapper}
                              onPress={() =>
                                navigation.navigate('brand', {brand})
                              }>
                              <Image
                                resizeMode="cover"
                                source={{uri: brand.images[0]}}
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
                          source={require('../../assets/icons/azheart.png')}
                        />
                      </View>
                      <Text style={styles.text}> See the brands you want </Text>
                      <Text style={styles.subText}>
                        Curate your own personal brand by favouriting the brands
                        that represent you.
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Stores&Brands')}>
                        <View style={styles.txtWrapper}>
                          <Text style={styles.browseTxt}> Browse Brands </Text>
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
    </FavesBrandsContext.Consumer>
  );
};

export default withNavigation(BrandTab);
