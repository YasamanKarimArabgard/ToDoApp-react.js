import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDoList from '../ToDoList/TodoList'
import FilterDate from '../Filter/FilterDate/FilterDate';
import FilterTodo from '../Filter/FilterTodo/FilterTodo';
import { useTodos, useTodosActions } from '../context/TodoProvider/TodoProvider'
import "./ToDoApp.css";

const ToDoApp = () => {

  const [selectedOption, setSelectedOption] = useState('All');
  const [selectedDateOption, setSelectedDateOption] = useState('Default');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const todos = useTodos();
  const dispatch = useTodosActions();

  useEffect(() => {
    filterTodos(selectedOption.value)
  }, [todos, selectedOption])

  useEffect(() => {
    filterTodos(selectedDateOption.value)
  }, [todos, selectedDateOption])

  const filterTodos = (status) => {

    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter(t => t.isCompeleted));
        break;
      case 'Notcompleted':
        setFilteredTodos(todos.filter(t => !t.isCompeleted));
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  const filterDates = (status) => {

    switch (status) {
      case 'Earliest':
        setFilteredTodos(todos.sort((a, b) => b.date > a.date ? 1 : -1));
        break;
      case 'Latest':
        setFilteredTodos(todos.sort((a, b) => b.date < a.date ? -1 : 1));
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  const selectTodoHandler = (e) => {
    // console.log(e);
    setSelectedOption(e);
    filterTodos(e.value);
  }

  const selectDateHandler = (e) => {
    setSelectedDateOption(e);
    filterDates(e.value)
  }

  return (
    <div className='Todo_container col-12 col-sm-10 col-md-12 col-xl-10 p-1 mt-3 d-flex flex-column align-items-center'>
      <div className='col-12 rounded border p-1 bg-white'>
        <NavBar
          unCompleted={todos.filter(t => !t.isCompleted).length}
          allTodos={todos.length}
          completed={todos.filter(t => t.isCompleted).length} />

        <ToDoForm addTodoHandler={(input) => dispatch({ type: 'todoHandler', value: input })} />

        {
          todos.length == 0 ?
            null :
            <div className='col-12 col-sm-12 d-flex flex-wrap justify-content-between'>
              <FilterTodo
                onChange={selectTodoHandler}
                selectedOption={selectedOption} />
              <FilterDate
                onChange={selectDateHandler}
                selectedDateOption={selectedDateOption} />
            </div>
        }

      </div>
      <ToDoList todos={filteredTodos}/>
    </div>
  );
};

export default ToDoApp;