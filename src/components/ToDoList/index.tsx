
import { values } from "mobx";
import { observer } from "mobx-react-lite"

import Header from './Header'
import ToDo from './ToDo'

import {ListWrapper} from './styled'

const ToDoList = ({store}) => {
  return (
    <ListWrapper>
      <Header store={store} />
      {values(store.todos).map(todo => (
        <ToDo todo={todo} />
      ))}
      
    </ListWrapper>
  )
}

export default  observer(ToDoList)
