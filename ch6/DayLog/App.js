import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogContextProvidr} from './contexts/LogContext';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <LogContextProvidr>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </LogContextProvidr>
  );
};

export default App;
