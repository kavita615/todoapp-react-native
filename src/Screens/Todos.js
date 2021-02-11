import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import TodoCard from '../Components/TodoCard';

function Todos({navigation}) {
  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (i) => {
    setTodos((prevTodo) => {
      prevTodo.splice(i, 1);
      const newTodo = [...prevTodo];
      return newTodo;
    });
  };

  return (
    <LinearGradient colors={['#ff5f6d', '#ffc371']} style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo's Tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {todos.map((todo, index) => {
              console.log('map =>', todo, index);
              return (
                <TodoCard
                  key={index}
                  index={index}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  navigation={navigation}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.writeTaskWrapper}>
        <Button
          mode="contained"
          style={styles.addWrapper}
          onPress={() => navigation.navigate('Add', {todos, setTodos})}>
          +
        </Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    color: 'black',
  },
});

export default Todos;
