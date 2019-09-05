import React, {Component} from 'react';
import {View, Image} from 'react-native';

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

const BrowseStack = createStackNavigator(
  {
    browse: {
      screen: BrowseScreen,
    },
    items: {
      screen: ItemsPageScreen,
    },
    item: {
      screen: ItemScreen,
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
    },
    brand: {
      screen: BrandScreen,
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
    item: {
      screen: ItemScreen,
    },
    store: {
      screen: StoreScreen,
    },
    brand: {
      screen: BrandScreen,
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
    StoresBrands: StoresBrandsStack,
    ForYou: ForYouStack,
    Sale: SaleStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Browse') {
          return (
            <Image
              source={
                focused
                  ? require('../assets/icons/stc-active.png')
                  : require('../assets/icons/stc-inactive.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        } else if (routeName === 'StoresBrands') {
          return (
            <Image
              source={
                focused
                  ? require('../assets/icons/stores-brands-active.png')
                  : require('../assets/icons/stores-brands-inactive.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        } else if (routeName === 'ForYou') {
          return (
            <Image
              source={
                focused
                  ? require('../assets/icons/for-you-active.png')
                  : require('../assets/icons/for-you-inactive.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        } else if (routeName === 'Sale') {
          return (
            <Image
              source={
                focused
                  ? require('../assets/icons/sales-active.png')
                  : require('../assets/icons/sales-inactive.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        } else if (routeName === 'Profile') {
          return (
            <Image
              source={
                focused
                  ? require('../assets/icons/profile-active.png')
                  : require('../assets/icons/profile-inactive.png')
              }
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2B2D2F',
      inactiveTintColor: '#2B2D2F',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        paddingTop: 10,
        backgroundColor: '#E0D5C4',
      },
    },
  },
);
