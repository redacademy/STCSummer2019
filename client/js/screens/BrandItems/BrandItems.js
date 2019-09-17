import React from 'react';
import Filter from '../../components/Filter';

const BrandItems = ({navigation, allItems}) => {
  return <Filter items={allItems} navigation={navigation} />;
};

export default BrandItems;
