import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useState} from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

const App = () => {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              style={styles.flatList}
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f5"
  },
  content: {
    padding: 40,
    backgroundColor: '#64b5f6',
    flex: 1,
  },
  list: {
    backgroundColor: '#64b5f6',
    flex: 1,
  },
  flatList: {
    backgroundColor: '#c7a4ff',
    borderRadius: 15,
  },
});

export default App;
