import type { FormEvent } from 'react'
import { observer } from "mobx-react-lite"
import { useStore } from '../../../hooks/useStore'

import {
  HeaderWrapper,
  Form,
  Input,
  Select,
  Option,
  Button
} from './styled'




const Header = () => {
  const {todo, rootStore: {addTodo}} = useStore()
  const randomId = () => Math.floor(Math.random() * 1000).toString(36);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(randomId(), todo.name, todo.priority)
    todo.reset()
  }

  return (
    <HeaderWrapper>
      <Form onSubmit={e => submitHandler(e)}>
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
