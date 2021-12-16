import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogContextProvidr} from './contexts/LogContext';
import {SearchContextProvider} from './contexts/SearchContext';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <LogContextProvidr>
      <SearchContextProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SearchContextProvider>
    </LogContextProvidr>
  );
};

export default App;
