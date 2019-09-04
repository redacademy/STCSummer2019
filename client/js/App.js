import RootStackNavigator from '../js/navigation/RootStackNavigator';
import React, {Fragment} from 'react';
import {Text} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <RootStackNavigator />
      {/* <Text>Test</Text> */}
    </Fragment>
  );
};

export default App;
