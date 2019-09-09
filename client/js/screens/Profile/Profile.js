import React from 'react';
import { View, Text, Button } from 'react-native';
import { createToken, deleteToken, queryToken } from "../../config/models/authentication"
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
const Profile = ({ navigation, user }) => {
  console.log(user)
  return (
    <View>
      <Button
        title={"Log Out"}
        onPress={
          async () => {
            await deleteToken();
            navigation.navigate('AuthLoading');
          }

        }
      />
      <Text>Profile Page</Text>
    </View>
  );
};

export default withNavigation(Profile);
