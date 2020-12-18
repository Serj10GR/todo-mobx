import {Fragment} from 'react'
import { TRootStore } from 'store/globalStore'
import { observer } from "mobx-react-lite"

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
      {todosAmount > 0 
        &&
       <Fragment>
        <Row>Total Tasks: {todosAmount}</Row>
        <Row>Done: {store.getDoneTodos()}</Row>
        <Row>ToDo: {todosAmount - store.getDoneTodos()}</Row>
       </Fragment>  
      }
    </BlockWrapper>
  )
}

export default observer(InfoBlock)
