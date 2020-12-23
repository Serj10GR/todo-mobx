import { types, destroy, Instance } from "mobx-state-tree";
import { values } from 'mobx'

import { Todo, TTodo } from './todoStore'


export const RootStore = types
  .model({
    todos: types.optional(types.map(Todo), {})
  })
  .actions(self => ({
    addTodo(id: string, name: string, priority: string) {
      self.todos.set(id, Todo.create({ name, priority}));
    },
    removeTodo(todo: TTodo) {
      destroy(todo)
    }
  }))
  .views(self => ({
    getTodosLength() {
      return values(self.todos).length
    },
    getDoneTodos(){
      const doneTodos:Array<TTodo> = []
      self.todos.forEach(todo => {
       if(todo.done) {
         doneTodos.push(todo)
       }
      })
      return doneTodos.length
    }
  }))
  

export type TRootStore = Instance<typeof RootStore>