import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  const onPress1 = () => {
    navigation.push('Detail', {id: 1});
  };
  const onPress2 = () => {
    navigation.push('Detail', {id: 2});
  };
  const onPress3 = () => {
    navigation.push('Detail', {id: 3});
  };

  return (
    <View>
      <Button title="Detail 열기1" onPress={onPress1}></Button>
      <Button title="Detail 열기2" onPress={onPress2}></Button>
      <Button title="Detail 열기3" onPress={onPress3}></Button>
    </View>
  );
};

export default HomeScreen;
