import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ItemList from '../../components/ItemList'
import styles from './styles'
import Filter from "../../components/Filter";
import PropTypes from "prop-types";
const ForYou = ({ items, navigation, }) => {
  return (
    <ScrollView>
      <TouchableOpacity>
        <Text>Filter</Text>
      </TouchableOpacity>
      <Filter items={items} navigation={navigation} />
    </ScrollView>
  );
};
ForYou.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default ForYou;
