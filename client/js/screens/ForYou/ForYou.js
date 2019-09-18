import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter'
const ForYou = ({ items, navigation }) => {
  return (
    <Filter items={items} navigation={navigation} />
  );
};

ForYou.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default ForYou;
