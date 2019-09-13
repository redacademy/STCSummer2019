import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ForYouItemList from '../../components/ForYouItemList'
import styles from './styles'
import PropTypes from 'prop-types';
const ForYou = ({ items, navigation }) => {
  return (
    <ScrollView>
      <View style={styles.allItems}>
        {
          items.map((item) => <ForYouItemList item={item} navigation={navigation} key={item.id} />)
        }
      </View>
    </ScrollView>
  );
};
ForYou.propTypes = {
  navigation: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
}

export default ForYou;
