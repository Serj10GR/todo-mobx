import styled from 'styled-components'

type TodoWrapperTypes = {
  priority: string
}


export const TodoWrapper = styled.div<TodoWrapperTypes>`
  width: 80%;
  border: ${props => {
    if(props.priority === 'low') return '1px solid yellow'
  }};
  padding: 0.5em 2em;
  margin-bottom: 1em;
  background-color: #fff;

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