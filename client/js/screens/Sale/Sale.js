import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StoreCard from '../../components/StoreCard'
import styles from './styles'
import PropTypes from 'prop-types';
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
Sale.propTypes = {
  navigation: PropTypes.object.isRequired,
  stores: PropTypes.array.isRequired
}

export default Sale;
