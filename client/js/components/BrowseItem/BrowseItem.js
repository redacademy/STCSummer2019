import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {fonts, colors} from '../../config/styles';

const {height} = Dimensions.get('window');

const BrowseItem = ({navigation, data}) => {
  //   const categories = [
  //     {
  //       category: 'Clothes',
  //       image: require('../../assets/images/clothing.png'),
  //     },
  //     {category: 'Shoes', image: require('../../assets/images/shoes.png')},
  //     {category: 'Bags', image: require('../../assets/images/bags.png')},
  //     {
  //       category: 'Accessories',
  //       image: require('../../assets/images/accessories.png'),
  //     },
  //   ];

  let images = data.map(item => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('allItems', {
            category: `${item.category}`,
          });
        }}>
        <Image
          style={{
            height: height / 5,
            width: '94%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '3.5%',
            marginVertical: '3.2%',
          }}
          source={item.image}
        />
        <Text style={{fontSize: 18, marginHorizontal: 10}}>
          {item.category}
        </Text>
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
