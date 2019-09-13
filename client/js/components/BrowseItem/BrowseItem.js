import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import PropTypes from 'prop-types';
const BrowseItem = ({navigation, data}) => {
  let images = data.map(item => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('allItems', {
            category: `${item.category}`,
          });
        }}>
        <Image style={styles.browseImage} source={item.image} />
        <Text style={styles.text}>{item.category}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView>
      <View>{images}</View>
    </ScrollView>
  );
};

BrowseItem.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default withNavigation(BrowseItem);
