import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import LogContext from '../contexts/LogContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const WriteScreen = ({route}) => {
  const log = route.params?.log;
  const navigation = useNavigation();
  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        date: date.toISOString(),
      });
    }

    navigation.pop();
  };
  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', style: 'cancel'},
        {
          text: '삭제',
          style: 'destructive',
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
        },
      ],
      [
        {
          cancelable: true,
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' && 'padding'}>
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
        <WriteEditor
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avoidingView: {flex: 1},
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default WriteScreen;
