import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import sharedNavigationOptions from './config';
import BrowseScreen from '../screens/Browse';
import ForYouScreen from '../screens/ForYou';
import ProfileScreen from '../screens/Profile';
import SaleScreen from '../screens/Sale';
import StoresBrandsScreen from '../screens/StoresBrands';
import ItemsPageScreen from '../screens/ItemsPage';
import ItemScreen from '../screens/Item';
import StoreScreen from '../screens/Store';
import BrandScreen from '../screens/Brand';
import BrandItemsScreen from '../screens/BrandItems';
import {BackButton, CogWheel} from './config';
import SettingsScreen from '../screens/Settings';
import MapScreen from '../screens/Map';

const BrowseStack = createStackNavigator(
  {
    browse: {
      screen: BrowseScreen,
    },
    allItems: {
      screen: ItemsPageScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    singleItem: {
      screen: ItemScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    store: {
      screen: StoreScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const StoresBrandsStack = createStackNavigator(
  {
    storesBrands: {
      screen: StoresBrandsScreen,
    },
    store: {
      screen: StoreScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    brand: {
      screen: BrandScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    brandItems: {
      screen: BrandItemsScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    map: {
      screen: MapScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ForYouStack = createStackNavigator(
  {
    forYou: {
      screen: ForYouScreen,
    },
    singleItem: {
      screen: ItemScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    store: {
      screen: StoreScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
    brand: {
      screen: BrandScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const SaleStack = createStackNavigator(
  {
    sale: {
      screen: SaleScreen,
    },
    store: {
      screen: StoreScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ProfileStack = createStackNavigator(
  {
    profile: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        headerRight: <CogWheel navigation={navigation} />,
      }),
    },
    settings: {
      screen: SettingsScreen,
      navigationOptions: navigation => ({
        headerLeft: <BackButton navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createBottomTabNavigator(
  {
    Browse: BrowseStack,
    'Stores&Brands': StoresBrandsStack,
    'For You': ForYouStack,
    Sale: SaleStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Browse') {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/stc-active3x.png')
                    : require('../assets/icons/stc-inactive3x.png')
                }
                style={styles.image}
              />
            </View>
          );
        } else if (routeName === 'Stores&Brands') {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/stores-brands-active3x.png')
                    : require('../assets/icons/stores-brands-inactive3x.png')
                }
                style={styles.image}
              />
            </View>
          );
        } else if (routeName === 'For You') {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/for-you-active3x.png')
                    : require('../assets/icons/for-you-inactive3x.png')
                }
                style={styles.image}
              />
            </View>
          );
        } else if (routeName === 'Sale') {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/sales-active3x.png')
                    : require('../assets/icons/sales-inactive3x.png')
                }
                style={styles.image}
              />
            </View>
          );
        } else if (routeName === 'Profile') {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={
                  focused
                    ? require('../assets/icons/profile-active3x.png')
                    : require('../assets/icons/profile-inactive3x.png')
                }
                style={styles.image}
              />
            </View>
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2B2D2F',
      inactiveTintColor: '#2B2D2F',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Lato-regular',
      },
      style: {
        backgroundColor: '#E0D5C4',
      },
    },
  },
);
