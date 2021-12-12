import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import LogContext from '../contexts/LogContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();
  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' && 'padding'}>
        <WriteHeader onSave={onSave} />
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
