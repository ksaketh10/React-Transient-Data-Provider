import React from 'react';
import './App.css';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <CreateTodo />
        <TodoItem />
      </header>
    </div>
  );
}

export default App;
