import React, {useRef} from 'react';
import {Animated, Button, View, Text, StyleSheet} from 'react-native';

const CalendarScreen = () => {
  const animation = useRef(new Animated.Value(1)).current;

  console.log(animation);

  const onFadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onFadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
          },
        ]}
      />
      <Button title="FadeIn" onPress={onFadeIn} />
      <Button title="FadeOut" onPress={onFadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
