import React from 'react';
import {View, StyleSheet} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
