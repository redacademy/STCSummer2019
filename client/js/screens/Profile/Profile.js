import React from 'react';
import {View, Text, Button, TouchableOpacity, Linking} from 'react-native';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';
import styles from './styles';
import TabViewProfile from '../../components/TabView';
import {withNavigation} from 'react-navigation';
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
      <View style={styles.btnWrapper}>
        <Text style={styles.userName}>{user.fullname}</Text>
      </View>
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
