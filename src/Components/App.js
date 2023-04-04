import React, { useState, useEffect } from 'react';
import Todos from './Todos'
import SingleTodo from './SingleTodo';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState({});

  async function getTodos() {
    try {
      const response = await fetch('https://jsonplace-univclone.herokuapp.com/todos/');
      const results = await response.json();
      setTodos(results);
    } catch(error) {
      console.error("ERROR fetching ToDo's", error);
    };
  };

  async function getSingleTodo(todoId) {
    try {
      const response = await fetch(`https://jsonplace-univclone.herokuapp.com/todos/${todoId}`);
      const results = await response.json();
      setSingleTodo(results);
    } catch(error) {
      console.log('ERROR fetching single todo.', error)
    };
  };
  
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <header>
        <h1>Todo List!</h1>
      </header>
      {
        singleTodo.id ? (
          <SingleTodo singleTodo={singleTodo} />
        ) : (       
          <Todos todos={todos} getSingleTodo={getSingleTodo} />
        )
      }
    </div>
  )
};

export default App;
