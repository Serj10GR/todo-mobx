import React from 'react'

import { 
  BlockWrapper,
  Title,
  Row,
 } from './styled'

const InfoBlock = ({store}) => {
  const todosAmount = store.getTodosLength()
  return (
    <BlockWrapper>
      <Title>{todosAmount? 'Your Tasks' : 'No Tasks'}</Title>
      {todosAmount > 0 &&
        <Row>Total Tasks: {todosAmount}</Row>
      }
      

      
    </BlockWrapper>
  )
}

export default InfoBlock
