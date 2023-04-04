import React from 'react';

function Todos({todos, getSingleTodo}) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id} onClick={() => 
            getSingleTodo(todo.id)}>{todo.title}
          </li>
        ))
      }
    </ul>
  )
};

export default Todos;