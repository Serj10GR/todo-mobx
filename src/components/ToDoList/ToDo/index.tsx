
import { observer } from "mobx-react"

import {TodoWrapper, TodoText} from './styled'

const ToDo = ({todo}) => (
  <TodoWrapper priority={todo.priority} >
    <input
      type="checkbox"
      checked={todo.done}
      onChange={e => todo.toggle()}
    />
    <TodoText done={todo.done}>{todo.name}</TodoText>
  </TodoWrapper>
)


export default observer(ToDo)
