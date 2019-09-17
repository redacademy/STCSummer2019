import React from 'react';
import { Header } from 'react-navigation-stack';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={styles.backContainer}
    onPress={() => navigation.goBack()}>
    <Image
      style={styles.backIcon}
      source={require('../assets/icons/back-inactive3x.png')}
    />
  </TouchableOpacity>
);

export const CogWheel = ({ navigation }) => (
  <TouchableOpacity
    style={styles.backContainer}
    onPress={() => navigation.navigate('settings')}>
    <Image
      style={styles.cogwheelIcon}
      source={require('../assets/icons/inactive.png')}
    />
  </TouchableOpacity>
);
export default sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  headerTintColor: 'white',
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: '#E0D5C4',
  },
  headerTitleStyle: { color: '#2B2D2F' },
});
