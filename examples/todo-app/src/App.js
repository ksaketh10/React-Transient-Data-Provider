import React from 'react';
import './App.css';
import CreateTodo from './CreateTodo';
import TodosList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateTodo />
        <TodosList />
      </header>
    </div>
  );
}

export default App;
