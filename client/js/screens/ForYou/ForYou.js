import React from 'react';
<<<<<<< HEAD
import {View, Text, SafeAreaView} from 'react-native';

const ForYou = () => {
  return <Text>For You Page</Text>;
=======
import { View, Text, ScrollView } from 'react-native';
import ItemList from '../../components/ItemList'
import styles from './styles'

const ForYou = ({ items, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.allItems}>
        {
          items.map((item) => <ItemList item={item} navigation={navigation} key={item.id} />)
        }
      </View>
    </ScrollView>
  );
>>>>>>> develop
};

export default ForYou;
