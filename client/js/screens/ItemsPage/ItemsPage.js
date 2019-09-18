import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';

const ItemsPage = ({allItems, navigation}) => {
  return <Filter items={allItems} navigation={navigation} />;
};
ItemsPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  allItems: PropTypes.array.isRequired,
};

export default ItemsPage;
