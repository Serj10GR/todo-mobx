import { TRootStore } from 'store/globalStore'
import { observer } from "mobx-react-lite"

import { 
  BlockWrapper,
  Title,
  Row,
  InfoInner,
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
       <InfoInner>
        <Row>Total Tasks: {todosAmount}</Row>
        <Row>Done: {store.getDoneTodos()}</Row>
        <Row>ToDo: {todosAmount - store.getDoneTodos()}</Row>
       </InfoInner>  
      }
    </BlockWrapper>
  )
}

export default observer(InfoBlock)
