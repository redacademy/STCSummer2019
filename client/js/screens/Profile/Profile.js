import React from 'react';
import {View, Text, Button, TouchableOpacity, Linking} from 'react-native';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
const Profile = ({navigation, user}) => {
  console.log(user);
  return (
    <View>
      <Button
        title={'Log Out'}
        onPress={async () => {
          await deleteToken();
          navigation.navigate('AuthLoading');
        }}
      />
      {/* <Button title={'Help'} onPress={navigation.navigate('OnBoarding')} /> */}
      <Text>Profile Page</Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('http://maps.apple.com/?ll=37.484847,-122.148386');
        }}>
        <Text>Open Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Profile);
