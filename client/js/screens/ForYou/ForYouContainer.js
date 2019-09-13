import React, { Component } from 'react';
import ForYou from './ForYou';
import { withNavigation } from 'react-navigation';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../../components/Loader';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const GET_NEW_ARRIVAL_ITEMS = gql`
query allItems($newArrival:Boolean!){
  allItems(filter:{newArrival: $newArrival}){
    id
    title
    brand{
      title
    }
    stores{
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
    styles
    size
    color
    price
    images
    tags
    discount
  }
  
}
`
class ForYouContainer extends Component {
  static navigationOptions = {
    title: 'New Arrivals',
  };
  render() {
    const { navigation } = this.props
    return (
      <Query query={GET_NEW_ARRIVAL_ITEMS} variables={{ newArrival: true }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <Text>{error.message}</Text>;
          return <ForYou items={data.allItems} navigation={navigation} />;
        }
        }
      </Query>
    )
  }
}
ForYouContainer.propTypes = {
  navigation: PropTypes.object.isRequired

}
export default ForYouContainer;
