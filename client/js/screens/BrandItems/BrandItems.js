import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import ItemsList from '../../components/ItemList';
import styles from './styles';

const BrandItems = ({navigation, allItems}) => {
  return (
    <ScrollView style={styles.allItemsContainer}>
      <View style={styles.sortItems}>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Sort</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/icons/dropdown.png')}
          />
        </View>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Tags</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/icons/dropdown.png')}
          />
        </View>
        <View style={styles.itemFilter}>
          <Text style={styles.sortItemsText}>Filter</Text>
          <Image
            style={styles.dropdown}
            source={require('../../assets/icons/inactivefilter.png')}
          />
        </View>
      </View>
      <View style={styles.allItems}>
        {allItems.map(item => (
          <ItemsList item={item} key={item.id} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

export default BrandItems;
