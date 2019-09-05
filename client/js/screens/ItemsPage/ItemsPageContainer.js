import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ItemsPage from './ItemsPage';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {withNavigation} from 'react-navigation';

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
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category,
  });

  findTitle = filter => {
    return filter;
  };

  filterData = (items, filter) =>
    items.filter(item => item.category === filter);

  render() {
    return (
      <Query query={GET_ITEMS}>
        {({loading, error, data}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          if (data) {
            const items = this.filterData(
              data.allItems,
              this.props.navigation.state.params.category,
            );
            return <ItemsPage allItems={items} />;
          }
        }}
      </Query>
    );
  }
}

export default withNavigation(ItemsPageContainer);
