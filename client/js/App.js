import React, {Fragment} from 'react';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigator />
    </ApolloProvider>
  );
};

export default App;
