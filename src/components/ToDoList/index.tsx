import { observer } from "mobx-react-lite"

import Header from './Header'
import ToDo from './ToDo'
import InfoBlock from './InfoBlock'

import { ListWrapper } from './styled'

import { useStore } from '../../hooks/useStore'
import { TTodo } from '../../store/todoStore'


const ToDoList = () => {
  const { rootStore : { todos }} = useStore()

  return (
    <ListWrapper>
      <Header/> 
      <InfoBlock />
      {todos.map((todo: TTodo) => (
        <ToDo key={todo.id} todo={todo}/>
      ))}     
    </ListWrapper>
  )
}

export default  observer(ToDoList)
