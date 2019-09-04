import React from 'react';
import {Header} from 'react-navigation-stack';

export default sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  headerTintColor: 'white',
  headerTitleStyle: {
    fontSize: 22,
  },
  header: props => <Header {...props} />,
  headerStyle: {
    backgroundColor: '#E0D5C4',
  },
  headerTitleStyle: {color: '#2B2D2F'},
});
