import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import ToDoForm from '../ToDoForm/ToDoForm'
import FilterDate from '../Filter/FilterDate/FilterDate';
import FilterTodo from '../Filter/FilterTodo/FilterTodo';
import ToDoList from '../ToDoList/TodoList'
import "./ToDoApp.css";
import { useTodos, useTodosActions } from '../context/TodoProvider/TodoProvider'

const ToDoApp = () => {

  const [selectedOption, setSelectedOption] = useState('All')
  const [selectedDateOption, setSelectedDateOption] = useState('Default')
  const [filteredTodos, setFilteredTodo] = useState([]);
  const [show, setShow] = useState(false);

  const todos = useTodos();
  const { todoHandler, updatedTodo } = useTodosActions();

  useEffect(() => {
    filterTodos(selectedOption.value)
  }, [todos, selectedOption])

  useEffect(() => {
    filterTodos(selectedDateOption.value)
  }, [todos, selectedDateOption])

  const filterTodos = (status) => {
    switch (status) {
      case "Compeleted":
        setFilteredTodo(todos.filter(t => t.isCompeleted));
        break;
      case "Notcompeleted":
        setFilteredTodo(todos.filter(t => !t.isCompeleted));
        break;
      default:
        setFilteredTodo(todos)
    }
  }

  const filterDates = (status) => {
    switch (status) {
      case "Earliest":
        setFilteredTodo(todos.sort((a, b) => b.date > a.date ? 1 : -1));
        break;
      case "Latest":
        setFilteredTodo(todos.sort((a, b) => b.date < a.date ? -1 : 1));
        break;
      default:
        setFilteredTodo(todos)
    }
  }


  const selectHandler = (e) => {
    console.log(e);
    setSelectedOption(e);
    filterTodos(e.value)
  }

  const selectDateHandler = (e) => {
    setSelectedDateOption(e);
    filterDates(e.value)
  }

  return (
    <div className='Todo_container col-12 col-sm-10 col-md-12 col-xl-10 p-1 mt-3 d-flex flex-column align-items-center'>
      <div className='col-12 rounded border p-1 bg-white'>
        <NavBar unCompeleted={todos.filter(t => !t.isCompeleted).length}
          allTodos={todos.length}
          compeleted={todos.filter(t => t.isCompeleted).length}
        />

        <ToDoForm addTodoHandler={todoHandler} />

        {
          todos.length == 0 ?
            null :
            <div className='col-12 col-sm-12 d-flex flex-wrap justify-content-between'>
              <FilterTodo
                onChange={selectHandler}
                selectedOption={selectedOption} />
              <FilterDate
                onChange={selectDateHandler}
                selectedDateOption={selectedDateOption} />
            </div>
        }

      </div>
      <ToDoList todos={filteredTodos}
        onUpdatedTodo={updatedTodo}
        show={show}
      />
    </div>
  );
};

export default ToDoApp;