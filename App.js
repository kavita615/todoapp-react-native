import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TodoCard from './src/Components/TodoCard';
import AddTodo from './src/Screens/AddTodo';
import Todos from './src/Screens/Todos';

const navigator = createStackNavigator(
  {
    Add: AddTodo,
    ToDos: Todos,
    TodoCard: TodoCard,
  },
  {
    initialRouteName: 'ToDos',
    defaultNavigationOptions: {
      title: 'ToDo App',
    },
  },
);

export default createAppContainer(navigator);
