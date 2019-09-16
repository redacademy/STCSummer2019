import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteToken} from '../../config/models/authentication';
import {withNavigation} from 'react-navigation';

const Settings = ({navigation}) => {
  return (
    <View>
      <View style={styles.helpContainer}>
        <Text style={styles.text}> Help </Text>
        <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
          <View style={styles.arrowContainer}>
            <Image
              source={require('../../assets/icons/forward-inactive2x.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.txtWrapper}>
        <TouchableOpacity
          onPress={async () => {
            await deleteToken();
            navigation.navigate('AuthLoading');
          }}>
          <Text style={styles.logoutTxt}> LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(Settings);
