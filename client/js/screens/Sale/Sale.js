import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StoreCard from '../../components/StoreCard'
import styles from './styles'

const Sale = ({ stores, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          stores.map((store) => <StoreCard store={store} navigation={navigation} key={store.id} />)
        }
      </View>
    </ScrollView>
  );
};


export default Sale;
