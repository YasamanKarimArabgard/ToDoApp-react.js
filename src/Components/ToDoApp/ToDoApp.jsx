import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDoList from '../ToDoList/TodoList'
import Filter from '../Filter/Filter';
import { useTodos, useTodosActions } from '../context/TodoProvider/TodoProvider'
import "./ToDoApp.css";

const ToDoApp = () => {

  const [filteredTodo, setFilteredTodos] = useState([]);

  const todos = useTodos();
  const dispatch = useTodosActions();

  return (
    <div className='Todo_container col-12 col-sm-10 col-md-12 col-xl-10 p-1 mt-3 d-flex flex-column align-items-center'>
      <div className='col-12 rounded border p-1 bg-white'>
        <NavBar
          unCompleted={todos.filter(t => !t.isCompleted).length}
          allTodos={todos.length}
          completed={todos.filter(t => t.isCompleted).length} />

        <ToDoForm addTodoHandler={(input) => dispatch({ type: 'todoHandler', value: input })} />

       <Filter setFilteredTodos={setFilteredTodos} />

      </div>
      <ToDoList todos={filteredTodo} />
    </div>
  );
};

export default ToDoApp;