import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogContext from './contexts/LogContext';
import RootStack from './screens/RootStack';

const App = () => {
  return (
    <LogContext.Provider value="안녕하세요">
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </LogContext.Provider>
  );
};

export default App;
