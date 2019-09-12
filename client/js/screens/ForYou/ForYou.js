import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ItemList from '../../components/ItemList'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Filter from "../../components/Filter";
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

export default ForYou;
