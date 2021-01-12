import { types, Instance } from "mobx-state-tree";

export const Todo = types
  .model({
    id: types.optional(types.string, ""),
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    priority: types.optional(types.string, "")
  })
  .actions(self => ({
    setName(newName: string) {
      self.name = newName;
    },
    toggle() {
      self.done = !self.done;
    },
    setPriority(newPriority: string) {
      self.priority = newPriority
    }
  }))
  //defined actions again to acces self functions
  .actions(self => ({
    reset() {
      self.setName('')
      self.setPriority('')
    }
  }))

export interface TTodo extends Instance<typeof Todo> {}