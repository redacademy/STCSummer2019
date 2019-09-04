import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ItemsPage from './ItemsPage';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_ITEMS = gql`
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

class ItemsPageContainer extends Component {
  render() {
    return (
      <Query query={GET_ITEMS}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          if (data) {
            console.log(data);
            return <ItemsPage />;
          }
        }}
      </Query>
    );
  }
}

export default ItemsPageContainer;
