import React, {Component} from './node_modules/react';
import {View, Text, StyleSheet} from 'react-native';
import Loader from '../Loader';
import {gql} from './node_modules/apollo-boost';
import FavesBrandsContext from '../../context/FaveBrandsContext';
import FavesStoresContext from '../../context/FaveStoresContext';
import FavesItemsContext from '../../context/FaveItemsContext';
import Faves from './faves';
import {Query} from './node_modules/react-apollo';
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

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <FavesItemsContext.Consumer>
        {({
          faveItemIds,
          faveStoreIds,
          faveBrandIds,
          removeFaveItem,
          removeFaveBrand,
        }) => (
          <Query query={GET_All_ITEMS}>
            {({loading, error, data}) => {
              if (loading) return <Loader />;
              if (error) return <Text>{error.message}</Text>;
              const itemData = data.allItems;
              console.log(faveItemIds, 'faveitem');
              // console.log(faveBrandIds, 'brand');
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
                            <Faves
                              faveItemIds={faveItemIds}
                              // faveBrandIds={faveBrandIds}
                              faveStoreIds={faveStoreIds}
                              items={itemData.filter(
                                item =>
                                  faveItemIds && faveItemIds.includes(item.id),
                              )}
                              navigation={navigation}
                              displayscreen={this.props.displayscreen}
                              stores={storesData.filter(
                                store =>
                                  faveStoreIds &&
                                  faveStoreIds.includes(store.id),
                              )}
                              brands={brandsData.filter(
                                brand =>
                                  faveBrandIds &&
                                  faveBrandIds.includes(brand.id),
                              )}
                            />
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

export default withNavigation(FavesContainer);
