import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import TabViewProfile from '../../components/TabView';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';

import AsyncStorage from '@react-native-community/async-storage';
const Profile = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <Button
        title={'Log Out'}
        onPress={async () => {
          await deleteToken();
          navigation.navigate('AuthLoading');
        }}
      />
      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/profilepic.png')}
          styles={styles.img}
        />
        <View style={styles.btnWrapper}>
          <Text style={styles.userName}>{user.fullname}</Text>
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
