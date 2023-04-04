import React from 'react';

function SingleTodo({singleTodo}) {
  
  const {title, completed, id, userId} = singleTodo;

  return (
    <>
      <p>{title}</p>
      <p>{completed}</p>
      <p>{id}</p>
      <p>{userId}</p>
    </>
  )
};

export default SingleTodo;