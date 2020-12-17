import { types, destroy } from "mobx-state-tree";

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
    return { setName, toggle, setPriority };
  });




const User = types.model({
  name: types.optional(types.string, "")
});





export const RootStore = types
  .model({
    users: types.map(User),
    todos: types.map(Todo)
  })
  .actions(self => {
    function addTodo(id: string, name: string, priority: string) {
      self.todos.set(id, Todo.create({ name, priority}));
    }
    function removeTodo(todo) {
      destroy(todo)
    }
    return { addTodo, removeTodo };
  });
