import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const BrowseItem = ({navigation, data}) => {
  let images = data.map(item => {
    return (
      <TouchableOpacity
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

export default withNavigation(BrowseItem);
