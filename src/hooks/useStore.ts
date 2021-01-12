import { RootStore } from '../store/globalStore'
import { Todo } from '../store/todoStore'

const store = {
  rootStore: RootStore.create({}),
  todo: Todo.create({})
}

export const useStore = () => store