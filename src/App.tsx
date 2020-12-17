
import ToDoList from './components/ToDoList'
import GlobalStyle from './globalStyles';
import { RootStore } from './store/globalStore';

const store = RootStore.create({
  users: {},
  todos: {}
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


