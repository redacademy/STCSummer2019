import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './styles';

const ItemsPage = ({allItems}) => {
  return (
    <ScrollView style={styles.allItemsContainer}>
      <View style={styles.sortItems}>
        <Text style={styles.sortItemsText}>Sort</Text>
        <Text style={styles.sortItemsText}>Tags</Text>
        <Text style={styles.sortItemsText}>Filter</Text>
      </View>
      <View style={styles.allItems}>
        {allItems.map(item => (
          <ItemList key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ItemsPage;
