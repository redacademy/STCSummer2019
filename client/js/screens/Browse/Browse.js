import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

const Browse = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('items');
          }}>
          <Image
            source={require('../../assets/clothing.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Clothing</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('items');
          }}>
          <Image
            source={require('../../assets/shoes.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}> Shoes </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('items');
          }}>
          <Image
            source={require('../../assets/bags.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Bags</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('items');
          }}>
          <Image
            source={require('../../assets/accessories.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Accessories</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Browse;
