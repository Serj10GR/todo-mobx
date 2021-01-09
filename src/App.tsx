import { Fragment } from 'react'
import ToDoList from './components/ToDoList'
import GlobalStyle from './globalStyles';
import { RootStore } from './store/globalStore';

const store = RootStore.create({});

const App =() => {
 
return (
  <Fragment>
    <GlobalStyle />
    <ToDoList store={store} />
  </Fragment>
);
}

export default App


