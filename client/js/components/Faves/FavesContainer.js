import React, {Component} from 'react';
import {Text} from 'react-native';
import Loader from '../Loader';
import {gql} from 'apollo-boost';
import FavesItemsContext from '../../context/FaveItemsContext';
import Faves from './Faves1';
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

class FavesContainer extends Component {
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
                            <Faves
                              navigation={navigation}
                              displayscreen={this.props.displayscreen}
                              items={itemData.filter(
                                item =>
                                  faveItemIds && faveItemIds.includes(item.id),
                              )}
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
