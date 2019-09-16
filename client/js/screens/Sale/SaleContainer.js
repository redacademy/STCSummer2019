import React, { Component } from 'react';
import Sale from './Sale';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../../components/Loader';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
const GET_SALE_STORES = gql`
query {
  allStores(filter:{sale_gt: 0}){
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
    saledescription
    storelink
  }
  
}
`
class SaleContainer extends Component {
  static navigationOptions = {
    title: 'Sale',
  };
  render() {
    const { navigation } = this.props
    return (
      <Query query={GET_SALE_STORES}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>{error.message}</Text>;
          return <Sale stores={data.allStores} navigation={navigation} />;
        }
        }
      </Query>
    )
  }
}
SaleContainer.propType = {
  navigation: PropTypes.object.isRequired,

}

export default SaleContainer;

