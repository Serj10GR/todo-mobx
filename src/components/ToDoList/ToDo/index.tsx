
import { observer } from "mobx-react"

import {
  TodoWrapper,
  TodoText,
  DeleteIcon,
  DeleteButton,
} from './styled'

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
    <DeleteButton onClick={() => store.removeTodo(todo)}><DeleteIcon /></DeleteButton>
  </TodoWrapper>
)


export default observer(ToDo)
