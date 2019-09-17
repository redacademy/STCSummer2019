import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './styles';
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
