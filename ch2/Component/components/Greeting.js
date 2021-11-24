import React from 'react';
import {View, Text} from 'react-native';

const Greeting = ({name = '리액트 네이티브'}) => {
  return (
    <View>
      <Text>안녕하세요 {name}!</Text>
    </View>
  );
};

export default Greeting;
