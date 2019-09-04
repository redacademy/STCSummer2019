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
    backgroundColor: 'transparent',
  },
});
