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

  border: ${props => {
    if (props.priority === 'low') return '1px solid yellow'
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
 right: 5px;
 border: none;
 background-color: #fff;
 cursor: pointer;
`