import React, {Component} from 'react';
import {View, Text} from 'react-native';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FilterList from '../FilterList';
import Loader from '../Loader';
import styles from '../ImageCarousel/styles';

const GET_All_STORES = gql`
  {
    allStores(orderBy: title_ASC) {
      title
    }
  }
`;
const GET_ALL_STYLES = gql`
  {
    allStyles(orderBy: title_ASC) {
      title
    }
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {items, navigation} = this.props;
    return (
      <Query query={GET_All_STORES}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          const storesData = data.allStores.map(store => store.title);
          return (
            <Query query={GET_ALL_STYLES}>
              {({loading, error, data}) => {
                if (loading) return <Loader />;
                if (error) return <Text>{error.message}</Text>;
                const allStylesData = data.allStyles.map(store => store.title);
                let stylesData;
                if (navigation.state.routeName === 'allItems') {
                  stylesData = allStylesData.filter(style =>
                    items.find(item => item.styles === style),
                  );
                } else {
                  stylesData = allStylesData;
                }
                return (
                  <FilterList
                    stores={storesData}
                    itemStyles={stylesData}
                    items={items}
                    navigation={navigation}
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

export default Filter;
