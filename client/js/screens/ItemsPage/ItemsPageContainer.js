import React, {Component} from 'react';
import {Text, ActivityIndicator} from 'react-native';
import ItemsPage from './ItemsPage';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const GET_ITEMS = gql`
  {
    allItems {
      title
      tags
      styles
      stores {
        id
        title
        storelink
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

  filterData = (items, filter) =>
    items.filter(item => item.category === filter);

  render() {
    return (
      <Query query={GET_ITEMS}>
        {({loading, error, data}) => {
          if (loading)
            return <ActivityIndicator size="large" style={styles.loader} />;
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
