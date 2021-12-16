import React, {useReducer, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import TransparentCircleButton from '../components/TransparentCircleButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const initialState = {mode: 'date', visible: false};

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {mode: action.mode, visible: true};
    case 'close':
      return {...state, visible: false};
    default:
      throw new Error('Unhandled action type');
  }
};

const WriteHeader = ({date, onChangeDate, onSave, onAskRemove, isEditing}) => {
  const navigation = useNavigation();
  const onGoBack = () => navigation.pop();

  const [state, dispatch] = useReducer(reducer, initialState);
  const open = mode => dispatch({type: 'open', mode});
  const close = () => dispatch({type: 'close'});

  const onPressDate = () => open('date');
  const onPressTime = () => open('time');

  const onConfirm = selectedDate => {
    close();
    onChangeDate(selectedDate);
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={onGoBack}
      />
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.seperator} />
        <Pressable onPress={onPressTime}>
          <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  seperator: {
    width: 8,
  },
});

export default WriteHeader;
