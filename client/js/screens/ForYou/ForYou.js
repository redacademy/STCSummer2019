import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ItemList from '../../components/ItemList'
import styles from './styles'
import PropTypes from 'prop-types';
const ForYou = ({ items, navigation }) => {
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
        {items.map(item => (
          <ItemList item={item} navigation={navigation} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
};
ForYou.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default ForYou;
