import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const WriteEditor = ({title, body, setTitle, setBody}) => {
  const bodyRef = useRef(null); // 컴포넌트나 DOM의 레퍼런스를 선택
  // TextInput의 레퍼런스는 포커스, 클리어를 제공

  const onTitleInputEnter = () => bodyRef.current.focus();

  // 안드로이드는 가상키보드 노출 시 전체 높이가 줄지만
  // iOS의 경우에는 키보드가 원래 영역을 가린다.
  // KeyboardAvoidingView로 감싸서 일관성있게하자

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        value={title}
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeText={setTitle}
        onSubmitEditing={onTitleInputEnter}
      />
      <TextInput
        style={styles.bodyInput}
        value={body}
        placeholder="당신의 오늘을 기록해보세요"
        multiline
        textAlignVertical="top"
        ref={bodyRef}
        onChangeText={setBody}
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
