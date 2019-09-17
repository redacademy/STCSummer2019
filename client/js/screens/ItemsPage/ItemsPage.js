import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './styles';
import PropTypes from 'prop-types';
import Filter from "../../components/Filter";
const ItemsPage = ({ allItems, navigation }) => {
  return (
    <Filter items={allItems} navigation={navigation} />
  );
};
ItemsPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  allItems: PropTypes.array.isRequired
}

export default ItemsPage;
