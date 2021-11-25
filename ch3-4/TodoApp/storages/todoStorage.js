import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'todos';

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('No saved todos');
      }

      return JSON.parse(rawTodos);
    } catch (e) {
      console.log('Failed to load todos');
    }
  },
  async set() {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(todos));
    } catch (e) {
      console.log('Failed to save todos');
    }
  },
};

export default todoStorage;
