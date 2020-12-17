
import { values } from "mobx";
import { observer } from "mobx-react-lite"

import Header from './Header'
import ToDo from './ToDo'

import {ListWrapper} from './styled'

const ToDoList = ({store}) => {
  return (
    <ListWrapper>
      <Header addTodo={store.addTodo} />
      {values(store.todos).map((todo, i) => (
        <ToDo key={i} todo={todo} store={store} />
      ))}
      
    </ListWrapper>
  )
}

export default  observer(ToDoList)
