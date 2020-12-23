import { observer } from "mobx-react-lite"

import { Todo } from '../../../store/todoStore'

import {
  HeaderWrapper,
  Form,
  Input,
  Select,
  Option,
  Button
} from './styled'

const todo = Todo.create({})

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

type HeaderProps = {
  addTodo: any
}
const Header = ({addTodo}: HeaderProps) => {

  return (
    <HeaderWrapper>
      <Form onSubmit={e => {
        e.preventDefault()
        addTodo(randomId(), todo.name, todo.priority)
        todo.reset()
      }}>
        <Input 
          required 
          type="text" 
          value={todo.name} 
          onChange={e => todo.setName(e.target.value)}  
        />
        <Select 
          required 
          name="priority" 
          onChange={e => todo.setPriority(e.target.value)}
          value={todo.priority}
        >
          <Option value="">Select Priority</Option>
          <Option value='low'>low</Option>
          <Option value='medium'>medium</Option>
          <Option value="high">high</Option>
        </Select>
        <Button type='submit'>Add new Task</Button>
      </Form>
    </HeaderWrapper>
  )
}

export default observer(Header)
