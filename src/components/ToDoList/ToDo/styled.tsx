import styled from 'styled-components/macro'
import { AiFillDelete } from "react-icons/ai";

type TodoWrapperTypes = {
  priority: string
}

export const TodoWrapper = styled.div<TodoWrapperTypes>`
  width: 100%;
  padding: 0.5em 2em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #777;

  box-shadow: ${props => {
  if (props.priority === 'low') return '5px 5px 15px 2px yellow'
  if (props.priority === 'high') return '5px 5px 15px 2px red'
    else return '5px 5px 15px 2px blue'
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
 font-size: 1.2rem;
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
export const Mark = styled.span`
 display: none;
`
export const CheckBoxInput = styled.input`
 height: 25px;
  width: 25px;
  appearance: none;
  border: 1px solid #34495E;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #41B883;
  cursor: pointer;

  &:checked {
    border: 1px solid #41B883;
    background-color: #34495E;
    ::before {
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      top: 2px;
      left: 6px;
      transform: rotate(40deg);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
    }
  }

  &:active {
    border: 2px solid #34495E;
  }
`

export const CheckBoxWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
`