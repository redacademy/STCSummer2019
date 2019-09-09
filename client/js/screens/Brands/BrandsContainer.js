import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import Loader from '../../components/Loader'
import Brands from './Brands';

const GET_All_BRANDS = gql`
{
  allBrands{
    id
    images
    title
    description 
    items{
      id
    }
    stores{
      id
      address
      phone
    } 
  }
}
`;

class BrandsContainer extends Component {
  static navigationOptions = {
    title: 'Stores & Brands',
    headerLeft: null,
    transitionConfig: () => ({
      transitionSpec: null
    })
  };

  render() {
    const { navigation } = this.props;
    return (<Query query={GET_All_BRANDS}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Text>{error.message}</Text>;
        return (<Brands brands={data.allBrands} navigation={navigation} />)
      }
      }
    </Query>
    );
  }
}

export default BrandsContainer;
