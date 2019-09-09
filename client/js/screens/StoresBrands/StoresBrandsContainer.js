import React, { Component } from 'react';
import Stores from './Stores';
// import { withNavigation } from 'react-navigation';
import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import { View, Text } from 'react-native';
import Loader from '../../components/Loader'


const GET_All_STORES = gql`
{
  allStores{
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



class StoresBrandsContainer extends Component {
  static navigationOptions = {
    title: 'Stores & Brands',
  };
  render() {
    const { navigation } = this.props;
    return (<Query query={GET_All_STORES}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Text>{error.message}</Text>;
        return (<Stores stores={data.allStores} navigation={navigation} />)
      }
      }
    </ Query>)
  }
}

export default StoresBrandsContainer;
