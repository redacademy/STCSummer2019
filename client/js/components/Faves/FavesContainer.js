import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loader from '../Loader';
import {gql} from 'apollo-boost';
import FavesBrandsContext from '../../context/FaveBrandsContext';
import FavesStoresContext from '../../context/FaveStoresContext';
import FavesItemsContext from '../../context/FaveItemsContext';
import Faves from './Faves';
import {Query} from 'react-apollo';

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

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FavesItemsContext.Consumer>
        <Query query={GET_All_ITEMS}>
          {({loading, error, data, faveItemIds, removeFaveItem}) => {
            if (loading) return <Loader />;
            if (error) return <Text>{error.message}</Text>;
            const itemData = data.allItems;
            return (
              <FavesStoresContext.Consumer>
                <Query query={GET_All_STORES}>
                  {({loading, error, data, faveStoreIds, removeFaveStore}) => {
                    if (loading) return <Loader />;
                    if (error) return <Text>{error.message}</Text>;
                    const storesData = data.allStores;
                    return (
                      <FavesBrandsContext.Consumer>
                        <Query query={GET_All_BRANDS}>
                          {({
                            loading,
                            error,
                            data,
                            faveBrandIds,
                            removeFaveBrand,
                          }) => {
                            if (loading) return <Loader />;
                            if (error) return <Text>{error.message}</Text>;
                            const brandsData = data.allBrands;
                            return (
                              <Faves
                                navigation={navigation}
                                faveItemIds={faveItemIds}
                                faveBrandIds={faveBrandIds}
                                faveStoreIds={faveStoreIds}
                                items={itemsData.filter(item =>
                                  faveItemIds.includes(item.id),
                                )}
                                faveItemIds={faveItemIds}
                                removeFaveItem={removeFaveItem}
                                stores={storesData.filter(store =>
                                  faveStoreIds.includes(store.id),
                                )}
                                brands={brandsData.filter(brand =>
                                  faveBrandIds.includes(brand.id),
                                )}
                              />
                            );
                          }}
                        </Query>
                      </FavesBrandsContext.Consumer>
                    );
                  }}
                </Query>
              </FavesStoresContext.Consumer>
            );
          }}
        </Query>
      </FavesItemsContext.Consumer>
    );
  }
}

export default FavesContainer;
