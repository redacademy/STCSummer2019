
import React, { Fragment } from 'react';

import { ApolloProvider } from '@apollo/react-hooks'
import client from './config/api'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
