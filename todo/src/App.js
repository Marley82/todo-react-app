import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/todoList';


// all functionality in the app file instead of calling in seperate components as per examples
function App() {
//creating input and buttons
    return (
      <div id="App">
        <h1>ToDo list concept</h1>
        <TodoForm />
        <TodoList />
      
      </div>
    );
  }

export default App;
