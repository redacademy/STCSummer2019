import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

const Browse = ({navigation}) => {
  return (
<<<<<<< HEAD
    <View>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('items');
            }}>
            <Image
              source={require('../../assets/images/clothing.png')}
              style={styles.browseImage}
            />
            <Text style={styles.text}>Clothing</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('items');
            }}>
            <Image
              source={require('../../assets/images/shoes.png')}
              style={styles.browseImage}
            />
            <Text style={styles.text}> Shoes </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('items');
            }}>
            <Image
              source={require('../../assets/images/bags.png')}
              style={styles.browseImage}
            />
            <Text style={styles.text}>Bags</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('items');
            }}>
            <Image
              source={require('../../assets/images/accessories.png')}
              style={styles.browseImage}
            />
            <Text style={styles.text}>Accessories</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
=======
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('allItems', {category: 'Clothes'});
          }}>
          <Image
            source={require('../../assets/clothing.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Clothing</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('allItems', {category: 'Shoes'});
          }}>
          <Image
            source={require('../../assets/shoes.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}> Shoes </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('allItems', {category: 'Bags'});
          }}>
          <Image
            source={require('../../assets/bags.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Bags</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('allItems', {category: 'Accessories'});
          }}>
          <Image
            source={require('../../assets/accessories.png')}
            style={styles.browseImage}
          />
          <Text style={styles.text}>Accessories</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
>>>>>>> develop
  );
};

export default Browse;
