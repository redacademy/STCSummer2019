import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import TabProfile from '../../components/TabProfile';

const Profile = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={require('../../assets/icons/profilepic.png')}
          styles={styles.img}
        />
        <View style={styles.btnWrapper}>
          <Text style={styles.userName}>{user.fullname}</Text>
        </View>
      </View>
      <TabProfile />
    </View>
  );
};

export default Profile;
