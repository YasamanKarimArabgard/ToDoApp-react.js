import React, { useState } from 'react';
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDoList from '../ToDoList/TodoList'
import "./ToDoApp.css";

const ToDoApp = () => {

  const [todos, setTodos] = useState([])

  const compeleteToDo = (id) => {
    //  console.log(id);
    const index = todos.findIndex(todo => todo.id === id)

    const selecteTodos = { ...todos[index] }
    selecteTodos.isCompeleted = !selecteTodos.isCompeleted;

    const updatedTodos = [...todos]
    updatedTodos[index] = selecteTodos;
    setTodos(updatedTodos);
  }

  const removeTodo = (id) => {
    console.log(id);
   const filterTodos = todos.filter( todo => todo.id !== id)
   setTodos(filterTodos)
  }

  return (
    <div className='Todo_container col-12 col-sm-10 col-md-12 col-xl-10 p-1 mt-3 d-flex flex-column align-items-center'>
      <ToDoForm setTodos={setTodos} todos={todos} />
      <ToDoList todos={todos} onCompelete={compeleteToDo} onRemove={removeTodo} />
    </div>
  );
};

export default ToDoApp;