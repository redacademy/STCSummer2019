import React, {Component} from 'react';
import {Text} from 'react-native';
import Loader from '../Loader';
import {gql} from 'apollo-boost';
import FavesItemsContext from '../../context/FaveItemsContext';
import Faves from './faves';
import {Query} from 'react-apollo';
import {withNavigation} from 'react-navigation';

const GET_All_STORES = gql`
  {
    allStores {
      id
      address
      categories
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
`;
const GET_All_BRANDS = gql`
  {
    allBrands {
      id
      images
      title
      description
      items {
        id
      }
      stores {
        id
        address
        phone
      }
    }
  }
`;

const GET_All_ITEMS = gql`
  {
    allItems {
      title
      tags
      styles
      stores {
        id
        title
        brands {
          title
          id
        }
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
      }
    }
  }
`;

class Faves extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <FavesItemsContext.Consumer>
        {({faveItemIds, faveStoreIds, faveBrandIds}) => (
          <Query query={GET_All_ITEMS}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>{error.message}</Text>;
              const itemData = data.allItems;
              return (
                <Query query={GET_All_STORES}>
                  {({loading, error, data}) => {
                    if (loading) return <Loader />;
                    if (error) return <Text>{error.message}</Text>;
                    const storesData = data.allStores;
                    return (
                      <Query query={GET_All_BRANDS}>
                        {({loading, error, data}) => {
                          if (loading) return <Loader />;
                          if (error) return <Text>{error.message}</Text>;
                          const brandsData = data.allBrands;
                          return (
                            // <Faves
                            //   navigation={navigation}
                            //   displayscreen={this.props.displayscreen}
                            //   items={itemData.filter(
                            //     item =>
                            //       faveItemIds && faveItemIds.includes(item.id),
                            //   )}
                            //   stores={storesData.filter(
                            //     store =>
                            //       faveStoreIds &&
                            //       faveStoreIds.includes(store.id),
                            //   )}
                            //   brands={brandsData.filter(
                            //     brand =>
                            //       faveBrandIds &&
                            //       faveBrandIds.includes(brand.id),
                            //   )}
                            // />
                            <View style={styles.container}>
                              {displayscreen.items &&
                                (items.length > 0 ? (
                                  <ScrollView>
                                    <View style={styles.favItemWrapper}>
                                      {items.map(item => (
                                        <View
                                          key={item.id}
                                          style={styles.subfavItemWrapper}>
                                          <TouchableOpacity
                                            style={styles.imgWrapper}
                                            onPress={() => {
                                              navigation.navigate(
                                                'singleItem',
                                                {item: item},
                                              );
                                            }}>
                                            <Image
                                              resizeMode="cover"
                                              source={{uri: item.images[0]}}
                                              style={styles.itemImage}
                                            />
                                          </TouchableOpacity>
                                        </View>
                                      ))}
                                    </View>
                                  </ScrollView>
                                ) : (
                                  <View>
                                    <View style={styles.containerImg}>
                                      <Image
                                        style={styles.iconImg}
                                        resizeMode="contain"
                                        source={require('../../assets/icons/heart-dress.png')}
                                      />
                                    </View>
                                    <Text style={styles.text}>
                                      {' '}
                                      Build your personal catalogue{' '}
                                    </Text>
                                    <Text style={styles.subText}>
                                      Start favouriting styles and clothes you
                                      like to build your personal catalogue
                                    </Text>
                                    <TouchableOpacity
                                      onPress={() => {
                                        navigation.navigate('Browse');
                                      }}>
                                      <View style={styles.txtWrapper}>
                                        <Text style={styles.browseTxt}>
                                          {' '}
                                          Browse Clothes{' '}
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                ))}

                              {displayscreen.brands &&
                                (brands.length > 0 ? (
                                  <ScrollView>
                                    <View style={styles.favItemWrapper}>
                                      {brands.map(brand => (
                                        <TouchableOpacity
                                          onPress={() =>
                                            navigation.navigate('brand', {
                                              brand: item,
                                            })
                                          }>
                                          <Brand brands={brands} />
                                        </TouchableOpacity>
                                      ))}
                                    </View>
                                  </ScrollView>
                                ) : (
                                  <View>
                                    <View style={styles.containerImg}>
                                      <Image
                                        style={styles.iconImg}
                                        resizeMode="contain"
                                        source={require('../../assets/icons/azheart.png')}
                                      />
                                    </View>
                                    <Text style={styles.text}>
                                      {' '}
                                      See the brands you want{' '}
                                    </Text>
                                    <Text style={styles.subText}>
                                      {' '}
                                      Curate your own personal brand by
                                      favouriting the brands that represent you.{' '}
                                    </Text>
                                    <TouchableOpacity
                                      onPress={() =>
                                        navigation.navigate('Stores&Brands')
                                      }>
                                      <View style={styles.txtWrapper}>
                                        <Text style={styles.browseTxt}>
                                          {' '}
                                          Browse Brands{' '}
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                ))}

                              {displayscreen.stores &&
                                (stores.length > 0 ? (
                                  <ScrollView>
                                    <View style={styles.favItemWrapper}>
                                      {stores.map(store => (
                                        <TouchableOpacity
                                          onPress={() =>
                                            navigation.navigate('store', {
                                              store,
                                            })
                                          }>
                                          <Image
                                            source={{uri: store.storeLogo}}
                                            style={styles.storeImage}
                                          />
                                        </TouchableOpacity>
                                      ))}
                                    </View>
                                  </ScrollView>
                                ) : (
                                  <View>
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
                                      Favourite stores to get notifications of
                                      sales and new arrivals !
                                    </Text>
                                    <TouchableOpacity
                                      onPress={() =>
                                        navigation.navigate('Stores&Brands')
                                      }>
                                      <View style={styles.txtWrapper}>
                                        <Text style={styles.browseTxt}>
                                          Browse Stores
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                ))}

                              {displayscreen.myphotos && (
                                <View>
                                  <View style={styles.containerImg}>
                                    <Image
                                      style={styles.iconImg}
                                      resizeMode="contain"
                                      source={require('../../assets/icons/Photos.png')}
                                    />
                                  </View>
                                  <Text style={styles.text}>
                                    Keep track of photos!
                                  </Text>
                                  <Text style={styles.subText}>
                                    Save your photos here so you always keep
                                    track of fashion you love !
                                  </Text>
                                  <TouchableOpacity>
                                    <View style={styles.txtWrapper}>
                                      <Text style={styles.browseTxt}>
                                        Capture a Picture
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity>
                                    <View style={styles.txtWrapper}>
                                      <Text style={styles.browseTxt}>
                                        Upload from Photos
                                      </Text>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              )}
                            </View>
                          );
                        }}
                      </Query>
                    );
                  }}
                </Query>
              );
            }}
          </Query>
        )}
      </FavesItemsContext.Consumer>
    );
  }
}

export default withNavigation(Faves);
