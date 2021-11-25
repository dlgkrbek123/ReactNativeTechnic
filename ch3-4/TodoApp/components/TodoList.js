import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TodoItem {...item} onToggle={onToggle} onRemove={onRemove} />
      )}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default TodoList;
