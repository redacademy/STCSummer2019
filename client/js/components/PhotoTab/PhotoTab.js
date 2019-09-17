import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const PhotoTab = () => {
  return (
    <View>
      <View style={styles.containerImg}>
        <Image
          style={styles.iconImg}
          resizeMode="contain"
          source={require('../../assets/icons/Photos.png')}
        />
      </View>
      <Text style={styles.text}>Photo Feature Coming Soon!</Text>
      <Text style={styles.subText}>
        Save your photos here so you always keep track of fashion you love!
      </Text>
    </View>
  );
};

export default PhotoTab;
