import React from 'react';
import {Platform, Pressable, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransparentCircleButton = ({name, color, hasMarginRight, onPress}) => {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios',
          pressed && {background: '#efefef'},
        ]}
        android_ripple={{color: '#EDEDED'}}
        onPress={onPress}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightMargin: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
