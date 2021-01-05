import styled from 'styled-components'
import { AiFillDelete } from "react-icons/ai";

type TodoWrapperTypes = {
  priority: string
}

export const TodoWrapper = styled.div<TodoWrapperTypes>`
  width: 100%;
  padding: 0.5em 2em;
  margin-bottom: 1em;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;

  border: ${props => {
    if (props.priority === 'low') return '1px solid yellow'
    if (props.priority === 'high') return '1px solid red'
    else return '1px solid blue'
  }};

  :last-of-type {
    margin-bottom: 0;
  }
`

type TodoTextTypes = {
  done: boolean
}

export const TodoText = styled.p<TodoTextTypes>`
 text-decoration: ${props => props.done ? 'line-through' : ''};
 display: inline;
`

export const DeleteIcon = styled(AiFillDelete)`
 color: red;
 font-size: 1.25rem;
`
export const DeleteButton = styled.button`
 position: absolute;
 right: 20px;
 border: none;
 background-color: #fff;
 cursor: pointer;
`
export const CheckBoxInput = styled.input`
 margin-right: 10px;
`