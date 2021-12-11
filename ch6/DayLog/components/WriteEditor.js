import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const WriteEditor = ({title, body, onchangeTitle, onChangeBody}) => {
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeText={onchangeTitle}
        value={title}
      />
      <TextInput
        style={styles.bodyInput}
        value={body}
        placeholder="당신의 오늘을 기록해보세요"
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
