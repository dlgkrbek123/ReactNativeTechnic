import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = ({route}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.block}>
      {/* <Text style={styles.text}>id : {route.params.id}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
