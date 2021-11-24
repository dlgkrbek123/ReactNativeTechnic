import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({rounded, size = 'medium', color = 'black'}) => {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}></View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.smmediumall,
  large: styles.large,
};

export default Box;
