import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import ToDoForm from '../ToDoForm/ToDoForm'
import FilterTodo from '../Filter/FilterTodo/FilterTodo';
import ToDoList from '../ToDoList/TodoList'
import "./ToDoApp.css";
import FilterDate from '../Filter/FilterDate/FilterDate';

const getItemsfromLS = () => {
  const items = localStorage.getItem("todos")
  if (items) {
    return JSON.parse(localStorage.getItem("todos"))
  }
  else {
    return []
  }
}

const ToDoApp = () => {

  const [todos, setTodos] = useState(getItemsfromLS())
  const [selectedOption, setSelectedOption] = useState('All')
  const [selectedDateOption, setSelectedDateOption ] = useState('Default')
  const [filteredTodos, setFilteredTodo] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    filterTodos(selectedOption.value)
  }, [todos, selectedOption])

  useEffect(() => {
    filterTodos(selectedDateOption.value)
  }, [todos, selectedDateOption])

  const todoHandeler = (input) => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + ' ' + time;

    const NewTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompeleted: false,
      created: dateTime
    }

    setTodos([...todos, NewTodo])
  }

  const compeleteToDo = (id) => {
    const index = todos.findIndex(todo => todo.id === id)

    const selectedTodos = { ...todos[index] }
    selectedTodos.isCompeleted = !selectedTodos.isCompeleted;

    const updatedTodos = [...todos]
    updatedTodos[index] = selectedTodos;
    setTodos(updatedTodos);
    // console.log(updatedTodos);
  }

  const removeTodo = (id) => {
    console.log(id);
    const filterTodos = todos.filter(todo => todo.id !== id)
    setTodos(filterTodos)
  }

  const updatedTodo = (id, newValue) => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + ' ' + time;
    // console.log(id);

    const index = todos.findIndex(todo => todo.id === id)

    const selecteTodos = { ...todos[index] }
    selecteTodos.text = newValue;
    selecteTodos.updated = dateTime

    const updatedTodos = [...todos]
    updatedTodos[index] = selecteTodos;
    setTodos(updatedTodos);
    const handleShow = () => setShow(true);

  }

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
  
  const selectDateHandler = (e) =>{
    setSelectedDateOption(e);
    filterDates(e.value)
  }

  const close = () => setShow(false);


  return (
    <div className='Todo_container col-12 col-sm-10 col-md-12 col-xl-10 p-1 mt-3 d-flex flex-column align-items-center'>
      <div className='col-12 rounded border p-1 bg-white'>
        <NavBar unCompeleted={todos.filter(t => !t.isCompeleted).length}
          allTodos={todos.length}
          compeleted={todos.filter(t => t.isCompeleted).length} />

        <ToDoForm todos={todos} addTodoHandeler={todoHandeler} />

        {
          todos.length == 0 ?
            null :
            <div className='col-12 col-sm-12 d-flex flex-wrap justify-content-between'>
              <FilterTodo
                onChange={selectHandler}
                selectedOption={selectedOption} />
              <FilterDate
                onChange={selectDateHandler}
                selectedDateOption={selectedDateOption}
              />
            </div>
        }

      </div>
      <ToDoList todos={filteredTodos}
        onCompelete={compeleteToDo}
        onDelete={removeTodo}
        onUpdatedTodo={updatedTodo}
        show={show}
        close={close} />
    </div>
  );
};

export default ToDoApp;