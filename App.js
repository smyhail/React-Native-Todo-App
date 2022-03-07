import React, {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from './components/TodoInsert';

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);
  // id
  const [idMax, setIdMax] =  useState(1);

  //sort by id
  todos.sort((a, b) => (a.id < b.id ) ? 1 : -1);
  //sort by checked
  todos.sort((a, b) => (a.checked > b.checked ) ? 1 : -1);
  
 
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: idMax, textValue: text, checked: false},
    ]);
    setIdMax(idMax +1);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,       
      ),
    );
  };
 


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default App;
