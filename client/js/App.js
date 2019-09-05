/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { ApolloProvider } from '@apollo/react-hooks'
import client from './config/api'
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <SignIn /> */}
      <SignUp />
    </ApolloProvider>
  );
};

export default App;
