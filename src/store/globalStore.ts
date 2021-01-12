import { types, destroy, Instance } from "mobx-state-tree";
import { values } from 'mobx'

import { Todo, TTodo } from './todoStore'


export const RootStore = types
  .model({
    todos: types.optional(types.array(Todo), [])
  })
  .actions(self => ({
    addTodo(id:string, name: string, priority: string) {
      self.todos.push(Todo.create({id, name, priority}));
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
      return self.todos.reduce((acc, todo) => {
       if(todo.done) {
         acc += 1
       }
       return acc
      }, 0)
    }
  }))
  

export interface TRootStore extends Instance<typeof RootStore> {}

