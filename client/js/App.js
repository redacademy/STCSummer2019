import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import {FaveStoresProvider} from './context/FaveStoresContext';
import {FaveBrandsProvider} from './context/FaveBrandsContext';
import {FaveItemsProvider} from './context/FaveItemsContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FaveStoresProvider>
        <FaveBrandsProvider>
          <FaveItemsProvider>
            <RootStackNavigator />
          </FaveItemsProvider>
        </FaveBrandsProvider>
      </FaveStoresProvider>
    </ApolloProvider>
  );
};

export default App;
