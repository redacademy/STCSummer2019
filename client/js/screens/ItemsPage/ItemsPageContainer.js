import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ItemsPage from './ItemsPage';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';

class ItemsPageContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
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
        `}>
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
