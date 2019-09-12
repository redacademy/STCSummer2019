
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FilterList from '../FilterList'
import Loader from '../Loader'

const GET_All_STORES = gql`
  {
    allStores (orderBy: title_ASC ){
      title
    }
  }
`;
const GET_ALL_STYLES = gql`
{
  allStyles (orderBy: title_ASC ){
    title
  }
}
`



class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { items, navigation } = this.props
    return (
      <Query query={GET_All_STORES}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          const storesData = data.allStores.map((store) => store.title);
          return (
            <Query query={GET_ALL_STYLES}>
              {({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return <Text>{error.message}</Text>;
                const stylesData = data.allStyles.map((store) => store.title);
                return (
                  <FilterList stores={storesData} itemStyles={stylesData} items={items} navigation={navigation} />
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
