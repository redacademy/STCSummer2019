import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {
  createToken,
  deleteToken,
  queryToken,
} from '../../config/models/authentication';
import styles from './styles';
//import TabViewProfile from '../../components/TabViewProfile';
import TabProfile from '../../components/TabProfile';
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

      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/profilepic.png')}
          styles={styles.img}
        />
        <View style={styles.btnWrapper}>
          <Text style={styles.userName}>{user.fullname}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL('http://maps.apple.com/?ll=37.484847,-122.148386');
        }}>
        <Text>Open Map</Text>
      </TouchableOpacity>
      <TabProfile />
    </View>
  );
};

export default withNavigation(Profile);
