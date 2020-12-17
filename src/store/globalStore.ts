import { types, destroy } from "mobx-state-tree";
import { values } from 'mobx'

export const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    priority: types.optional(types.string, "")
  })
  .actions(self => {
    function setName(newName: string) {
      self.name = newName;
    }

    function toggle() {
      self.done = !self.done;
    }
    function setPriority(newPriority: string) {
      self.priority = newPriority
    }
    function reset(){
      self.name=''
      self.priority=''
    }
    return { setName, toggle, setPriority, reset };
    
  });







export const RootStore = types
  .model({
    todos: types.map(Todo)
  })
  .actions(self => {
    function addTodo(id: string, name: string, priority: string) {
      self.todos.set(id, Todo.create({ name, priority}));
    }
    function removeTodo(todo) {
      destroy(todo)
    }
    function getTodosLength(){
      return values(self.todos).length
    }
    return { addTodo, removeTodo, getTodosLength };
  })
  