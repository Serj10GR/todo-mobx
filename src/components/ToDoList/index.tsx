
import { observer } from "mobx-react-lite"

import Header from './Header'
import ToDo from './ToDo'
import InfoBlock from './InfoBlock'

import {ListWrapper} from './styled'
import {TRootStore} from '../../store/globalStore'

type TToDoList = {
  store: TRootStore
}

const ToDoList = ({store} : TToDoList) => {
  return (
    <ListWrapper>
      <Header addTodo={store.addTodo} />
      <InfoBlock store={store} />
      {store.todos.map((todo, i) => (
        <ToDo key={todo.id} todo={todo} store={store} />
      ))}
      
    </ListWrapper>
  )
}

export default  observer(ToDoList)
