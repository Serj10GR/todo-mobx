import React from 'react'
import { observer } from "mobx-react-lite"
import { values } from "mobx";

import TodoView from './todo'

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

type AppType = {
  store: any
}

const AppView =({store} : AppType) => (
  <div>
    <button onClick={e => store.addTodo(randomId(), "New Task")}>
      Add Task
    </button>
    {values(store.todos).map(todo => (
      <TodoView todo={todo} />
    ))}
  </div>
);

export default observer(AppView)


