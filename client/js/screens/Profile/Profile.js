import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import TabProfile from '../../components/TabProfile';
import {Gravatar, GravatarApi} from 'react-native-gravatar';

const Profile = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>

        <Gravatar
          options={{
            email: user.email,
            parameters: {size: '200', d: 'mm'},
            secure: true,
          }}
          style={styles.roundedProfileImage}
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
