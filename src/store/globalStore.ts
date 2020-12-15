import { types } from "mobx-state-tree";

export const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    priority: types.optional(types.string, "")
  })
  .actions(self => {
    function setName(newName) {
      self.name = newName;
    }

    function toggle() {
      self.done = !self.done;
    }
    function setPriority(newPriority) {
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
    function addTodo(id, name, priority) {
      self.todos.set(id, Todo.create({ name, priority}));
    }

    return { addTodo };
  });
