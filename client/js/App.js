import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import {FaveStoresProvider} from './context/FaveStoresContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FaveStoresProvider>
        <RootStackNavigator />
      </FaveStoresProvider>
    </ApolloProvider>
  );
};

export default App;
