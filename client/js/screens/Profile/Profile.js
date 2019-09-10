import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import TabViewProfile from '../../components/TabView';
import {withNavigation} from 'react-navigation';
import styles from './styles';
// import Icon from 'react-native-vector-icons/Ionicons';

import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';

import AsyncStorage from '@react-native-community/async-storage';
const Profile = ({navigation, user}) => {
  console.log(user);

  return (
    <View style={{flex: 1}}>
      <Button
        title={'Log Out'}
        onPress={async () => {
          await deleteToken();
          navigation.navigate('AuthLoading');
        }}
      />
      <View style={{flexDirection: 'row', marginHorizontal: '3.5%'}}>
        <Image
          source={require('../../assets/profilepic.png')}
          styles={styles.img}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.userName}>Marie</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('allItems', {category: 'Clothes'});
            }}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TabViewProfile navigation={navigation} />
    </View>
  );
};

export default withNavigation(Profile);
