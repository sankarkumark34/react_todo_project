import React from 'react';
import './App.css';
import TodoList from './components/todoList';
import 'react-native-match-media-polyfill';
function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;