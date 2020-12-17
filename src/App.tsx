
import ToDoList from './components/ToDoList'
import GlobalStyle from './globalStyles';
import { RootStore } from './store/globalStore';

const store = RootStore.create({
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


