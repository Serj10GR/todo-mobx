import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { RootStore } from './mst/Globalstore';

const store = RootStore.create({
  users: {},
  todos: {
    "1": {
      name: "Eat a cake",
      done: true,
      priority: 'medium'
    },
    "2": {
      name: 'run',
      done: false,
      priority:'low'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
      <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


