import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './styles';
import PropTypes from 'prop-types';

const ItemsPage = ({ allItems, navigation }) => {
  return (
    <ScrollView style={styles.allItemsContainer}>
      <View style={styles.sortItems}>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Sort</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/dropdown.png')}
          />
        </View>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Tags</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/dropdown.png')}
          />
        </View>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Filter</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/inactivefilter.png')}
          />
        </View>
      </View>
      <View style={styles.allItems}>
        {allItems.map(item => (
          <ItemList key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};
ItemsPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  allItems: PropTypes.array.isRequired
}

export default ItemsPage;
