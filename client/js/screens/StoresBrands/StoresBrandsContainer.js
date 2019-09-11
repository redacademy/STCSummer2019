import React, {Component} from 'react';
import StoresBrands from './StoresBrands';

import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';
import {Text} from 'react-native';
import Loader from '../../components/Loader';

const GET_All_STORES = gql`
  {
    allStores {
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

class StoresBrandsContainer extends Component {
  static navigationOptions = {
    title: 'Stores & Brands',
  };
  constructor(props) {
    super(props);
    this.state = {
      displayStore: true,
    };
  }

  displayStores = () => {
    this.setState({displayStore: true});
  };

  displayBrands = () => {
    this.setState({displayStore: false});
  };

  render() {
    const {navigation} = this.props;
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
                  <StoresBrands
                    stores={storesData}
                    brands={brandsData}
                    navigation={navigation}
                    displayStores={this.displayStores}
                    displayBrands={this.displayBrands}
                    displayPage={this.state.displayStore}
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default StoresBrandsContainer;
