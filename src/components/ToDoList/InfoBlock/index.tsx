import React from 'react'
import { TRootStore } from 'store/globalStore'

import { 
  BlockWrapper,
  Title,
  Row,
 } from './styled'

 type  TInforBlock = {
   store: TRootStore
 }

const InfoBlock = ({store}: TInforBlock) => {
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
