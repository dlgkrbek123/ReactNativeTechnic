import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
      />
      <Text style={styles.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default Empty;
