import React, {Component} from 'react';
import {Image, ImageBackground, Animated, LayoutAnimation} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('SignUp')}
      onSkip={() => navigation.navigate('SignUp')}
      bottomBarColor="#fff"
      nextLabel=""
      titleStyles={styles.titleStyles}
      containerStyles={styles.containerStyles}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground
              style={styles.imageContainer}
              source={require('../../assets/images/map-background.png')}>
              <Image
                style={styles.imagePin}
                source={require('../../assets/images/pin-animate.png')}
              />
            </ImageBackground>
          ),
          title: 'Browse STC for styles, brands and any coveted items.',
          subtitle:
            'No waiting, no shipping fees or buying the wrong size. Head right to the store, check the fit and purchase the item.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground
              style={[styles.imageContainer]}
              source={require('../../assets/images/item-background.png')}>
              <Image
                style={styles.imageList}
                source={require('../../assets/images/list-animate.png')}
              />
            </ImageBackground>
          ),
          title:
            'Curate your own fashion catalogue by favouriting items, stores and brands.',
          subtitle:
            'Be the first to know when your favourites go on sale or recieve new arrivals.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <ImageBackground style={styles.imageContainer}>
              <Image
                style={[styles.imageBubble]}
                source={require('../../assets/images/bubble-animate.png')}
              />
              <Image
                style={[styles.imageHouse]}
                source={require('../../assets/images/house-animate.png')}
              />
            </ImageBackground>
          ),
          title: '',
          subtitle:
            'Shop This City bridges the gap between customers and local independent boutiques through a common passion for fashion.',
        },
      ]}
    />
  );
};

export default OnBoarding;
