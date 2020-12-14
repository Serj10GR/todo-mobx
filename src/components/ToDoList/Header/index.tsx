import { useState } from 'react'
import { observer } from "mobx-react-lite"


import {
  HeaderWrapper,
  Form,
  Input,
  Select,
  Option,
  Button
} from './styled'


const randomId = () => Math.floor(Math.random() * 1000).toString(36);

const Header = ({store}) => {
  const [todoName, setToDoName] = useState('')
  const [priority, setPriority] = useState('')
  return (
    <HeaderWrapper>
      <Form onSubmit={e => {
        e.preventDefault()
        store.addTodo(randomId(), todoName, priority)
      }}>
        <Input 
          required 
          type="text" 
          value={todoName} 
          onChange={e => setToDoName(e.target.value)}  
        />
        <Select 
          required 
          name="priority" 
          onChange={e => setPriority(e.target.value)}
        >
          <Option value="">Select Priority</Option>
          <Option value='low'>low</Option>
          <Option value='medium'>medium</Option>
          <Option value="high">high</Option>
        </Select>
        <Button>Add new Task</Button>
      </Form>
    </HeaderWrapper>
  )
}

export default observer(Header)
