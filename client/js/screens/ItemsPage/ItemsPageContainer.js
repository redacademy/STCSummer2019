import React, {Component} from 'react';
import {Text} from 'react-native';
import ItemsPage from './ItemsPage';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
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
          images
          description
        }
        images
        storeLogo
        categories
        hours
        address
        phone
        email
        website
        sale
        saledescription
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
        images
        description
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
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          if (data) {
            const items = this.filterData(
              data.allItems,
              this.props.navigation.state.params.category,
            );
            return (
              <ItemsPage allItems={items} navigation={this.props.navigation} />
            );
          }
        }}
      </Query>
    );
  }
}
ItemsPageContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(ItemsPageContainer);
