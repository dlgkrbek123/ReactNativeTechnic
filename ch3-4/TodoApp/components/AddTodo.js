import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';

const AddTodo = ({onInsert}) => {
  const [text, setText] = useState('');

  const customButton = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  const onButtonPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onButtonPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onButtonPress}>
            {customButton}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onButtonPress}>
              {customButton}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#bdbdbd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
