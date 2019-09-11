import React from 'react';
<<<<<<< HEAD
import {View, Text, Button} from 'react-native';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';
import {withNavigation} from 'react-navigation';
=======
import { View, Text, Button, TouchableOpacity, Linking } from 'react-native';
import { createToken, deleteToken, queryToken } from "../../config/models/authentication"
import { withNavigation } from 'react-navigation';
>>>>>>> develop
import AsyncStorage from '@react-native-community/async-storage';
const Profile = ({navigation, user}) => {
  console.log(user);
  return (
    <View>
      <Button
<<<<<<< HEAD
        title={'Log Out'}
        onPress={async () => {
          await deleteToken();
          navigation.navigate('AuthLoading');
        }}
=======
        title={"Log Out"}
        onPress={
          async () => {
            await deleteToken();
            navigation.navigate('AuthLoading');
          }
        }
>>>>>>> develop
      />
      {/* <Button title={'Help'} onPress={navigation.navigate('OnBoarding')} /> */}
      <Text>Profile Page</Text>
      <TouchableOpacity
        onPress={() => { Linking.openURL("http://maps.apple.com/?ll=37.484847,-122.148386") }}
      >
        <Text>Open Map</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Profile);
