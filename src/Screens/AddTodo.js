import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Button} from 'react-native-paper';

const AddTodo = ({navigation}) => {
  const {todos, setTodos, index} = navigation.state.params;
  const initialText = typeof index === 'number' ? todos[index] : '';
  const title = typeof index === 'number' ? 'Edit Task' : 'Add Task';
  const btn = typeof index === 'number' ? 'Update' : 'Add';
  const [text, setText] = useState(initialText);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (typeof index === 'number') {
      setTodos((prevTodos) =>
        prevTodos.map((todo, i) => {
          if (index === i) {
            todo = text;
          }
          return todo;
        }),
      );
    } else {
      setTodos([...todos, text]);
    }
    setText('');
    navigation.navigate('ToDos');
  };

  return (
    <LinearGradient colors={['#ff5f6d', '#ffc371']} style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.inputBtn}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={text}
          onChangeText={setText}
        />
        <Button
          mode="contained"
          style={styles.buttonContainer}
          onPress={() => handleAddTask(text)}
          disabled={text == '' ? true : false}>
          {btn}
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  items: {
    marginTop: 30,
  },
  addbtn: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    borderRadius: 15,
  },
  addWrapper: {
    marginTop: 20,
    width: 60,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  btns: {
    justifyContent: 'center',
  },
  inputBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 16,
  },
  input: {
    flex: 6,
    color: 'purple',
    fontSize: 18,
    marginRight: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddTodo;
