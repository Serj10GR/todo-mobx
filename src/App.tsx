
import ToDoList from './components/ToDoList'
import GlobalStyle from './globalStyles';
import { RootStore } from './store/globalStore';

const store = RootStore.create({
  users: {},
  todos: {
    "1": {
      name: "Eat a cake",
      done: true,
    },
    "2": {
      name: 'run',
      done: false,
    }
  }
});

const App =() => {
 
return (
  <>
    <GlobalStyle />
    <ToDoList store={store} />
  </>
);
}

export default App


