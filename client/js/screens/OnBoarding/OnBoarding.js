import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';
import { queryToken } from '../../config/models/authentication';
import { createOnBoarding } from '../../config/models/onBoarding';
const OnBoarding = ({ navigation }) => {
  return (
    <Onboarding
      onDone={async () => {
        await createOnBoarding();
        await queryToken() ? navigation.goBack() : navigation.navigate('SignUp')
      }}
      onSkip={async () => {
        await createOnBoarding();
        await queryToken() ? navigation.goBack() : navigation.navigate('SignUp')
      }}
      bottomBarColor="white"
      nextLabel=""
      titleStyles={styles.titleStyles}
      containerStyles={styles.containerStyles}
      subTitleStyles={styles.titleStyles}
      pages={
        [
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={styles.imageContainer}
                source={require('../../assets/images/onboarding-1.gif')}
              />
            ),
            title: 'Browse STC for styles, brands and any coveted items.',
            subtitle:
              'No waiting, no shipping fees or buying the wrong size. Head right to the store, check the fit and purchase the item.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={[styles.imageContainer]}
                source={require('../../assets/images/onboarding-2.gif')}
              />
            ),
            title:
              'Curate your own fashion catalogue by favouriting items, stores and brands.',
            subtitle:
              'Be the first to know when your favourites go on sale or recieve new arrivals.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={[styles.imageContainer]}
                source={require('../../assets/images/onboard3.gif')}
              />
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
