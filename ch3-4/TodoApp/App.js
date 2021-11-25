import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import todoStorage from './storages/todoStorage';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(({id}) => id)) + 1 : 1;

    setTodos(prev =>
      prev.concat({
        id: nextId,
        text,
        done: false,
      }),
    );
  };
  const onToggle = id => {
    setTodos(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item,
      ),
    );
  };
  const onRemove = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length > 0 ? (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          ) : (
            <Empty />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
