
import React, { Fragment } from 'react';

import { ApolloProvider } from '@apollo/react-hooks'
import client from './config/api'
import RootStackNavigator from '../js/navigation/RootStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
