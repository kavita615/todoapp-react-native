import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';

const TodoCard = (props) => {
  const {todo, index, navigation, handleDeleteTodo, todos, setTodos} = props;

  const EditIcon = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Add', {todos, setTodos, index})}>
      <Image source={require('../../assets/images/edit.png')}></Image>
    </TouchableOpacity>
  );

  const DeleteIcon = () => (
    <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
      <Image source={require('../../assets/images/trash-2.png')}></Image>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.input} value={todo} disabled={true} />
        <View style={styles.buttonContainer}>
          <EditIcon />
          <DeleteIcon />
        </View>
      </View>
    </>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 15,
  },
  input: {
    flex: 3,
    backgroundColor: '#fff',
    fontSize: 18,
    marginRight: 16,
    borderRadius: 15,
    borderTopLeftRadius: 15,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  divider: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
});
