import { TRootStore } from '../../../store/globalStore'
import { TTodo } from '../../../store/todoStore'
import { observer } from "mobx-react"

import {
  CheckBoxInput,
  TodoWrapper,
  TodoText,
  DeleteIcon,
  DeleteButton,
} from './styled'

type ToDoProps = {
  todo: TTodo | any,
  store: TRootStore,
}
const ToDo = ({todo, store}: ToDoProps) => (
  <TodoWrapper priority={todo.priority} >
    <CheckBoxInput
      type="checkbox"
      checked={todo.done}
      onChange={e => todo.toggle()}
    />
    <TodoText done={todo.done}>{todo.name}</TodoText>
    <DeleteButton onClick={() => store.removeTodo(todo)}><DeleteIcon /></DeleteButton>
  </TodoWrapper>
)


export default observer(ToDo)
