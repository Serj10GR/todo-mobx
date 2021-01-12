import { observer } from "mobx-react-lite"
import { useStore } from '../../../hooks/useStore'

import { 
  BlockWrapper,
  Title,
  Row,
  InfoInner,
 } from './styled'


const InfoBlock = () => {
  const {rootStore :{ getTodosLength, getDoneTodos }} = useStore()
  const todosAmount = getTodosLength()

  return (
    <BlockWrapper>
      <Title>{todosAmount? 'Your Tasks' : 'No Tasks'}</Title>
      {todosAmount > 0 
        &&
       <InfoInner>
        <Row>Total Tasks: {todosAmount}</Row>
        <Row>Done: {getDoneTodos()}</Row>
        <Row>ToDo: {todosAmount - getDoneTodos()}</Row>
       </InfoInner>  
      }
    </BlockWrapper>
  )
}

export default observer(InfoBlock)
