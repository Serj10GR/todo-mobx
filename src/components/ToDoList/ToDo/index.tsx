import { observer } from "mobx-react"
import { TTodo } from '../../../store/todoStore'
import { useStore } from '../../../hooks/useStore'

import {
  CheckBoxWrapper,
  CheckBoxInput,
  Mark,
  TodoWrapper,
  TodoText,
  DeleteIcon,
  DeleteButton,
} from './styled'

type ToDoProps = {
  todo: TTodo,
}
const ToDo = ({todo}: ToDoProps) => {
  const { rootStore: {removeTodo}} = useStore()
  return (
    <TodoWrapper priority={todo.priority} >
      <CheckBoxWrapper>
        <CheckBoxInput
          type="checkbox"
          checked={todo.done}
          onChange={e => todo.toggle()}
        />
        <Mark />
      </CheckBoxWrapper>
      <TodoText done={todo.done}>{todo.name}</TodoText>
      <DeleteButton onClick={() => removeTodo(todo)}><DeleteIcon /></DeleteButton>
    </TodoWrapper>

  )
  
}


export default observer(ToDo)
