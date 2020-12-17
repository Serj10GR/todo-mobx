
import { observer } from "mobx-react"

import {TodoWrapper, TodoText} from './styled'

type ToDoProps = {
  todo: any,
  store: any,
}
const ToDo = ({todo, store}: ToDoProps) => (
  <TodoWrapper priority={todo.priority} >
    <input
      type="checkbox"
      checked={todo.done}
      onChange={e => todo.toggle()}
    />
    <TodoText done={todo.done}>{todo.name}</TodoText>
    <button onClick={() => store.removeTodo(todo)}>Delete</button>
  </TodoWrapper>
)


export default observer(ToDo)
