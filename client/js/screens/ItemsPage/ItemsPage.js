import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemList from '../../components/ItemList';

const ItemsPage = ({allItems}) => {
  return (
    <ScrollView>
      {allItems.map(item => (
        <ItemList key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

export default ItemsPage;
