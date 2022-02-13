import React, { useContext, useState, useEffect, useReducer } from 'react';

const getItemsfromLS = () => {
    const items = localStorage.getItem("todos")
    if (items) {
        return JSON.parse(localStorage.getItem("todos"))
    }
    else {
        return []
    }
}

const intialState = getItemsfromLS();

const reducer = (state, action) => {

    switch (action.type) {
        //     case 'todoHandler':
        //         let today = new Date();
        //         let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //         let time = today.getHours() + ":" + today.getMinutes();
        //         let dateTime = date + ' ' + time;

        //         const NewTodo = {
        //             id: Math.floor(Math.random() * 1000),
        //             text: action.value,
        //             isCompeleted: false,
        //             created: dateTime
        //         }

        //         return ([...state], action.value)
        case 'removeTodo':
            const removeTodos = state.filter(todo => todo.id !== action.id)
            return removeTodos
        case 'compeleteTodo':
            const index = state.findIndex(todo => todo.id === action.id)

            const selectedTodos = { ...state[index] }
            selectedTodos.isCompeleted = !selectedTodos.isCompeleted;

            const updatedTodosCompelete = [...state]
            updatedTodosCompelete[index] = selectedTodos;
            return updatedTodosCompelete
        case 'updatedTodo':
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let time = today.getHours() + ":" + today.getMinutes();
            let dateTime = date + ' ' + time;

            const index2 = state.findIndex(todo => todo.id === action.id)

            const selecteTodos = { ...state[index2] }
            selecteTodos.text = action.value;
            selecteTodos.updated = dateTime
            const updatedTodos = [...state]
            updatedTodos[index2] = selecteTodos;
            return updatedTodos

        default:
            return state
    }
}

const todosContext = React.createContext();
const todosContextDispatcher = React.createContext();

const TodoProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <todosContext.Provider value={todos}>
            <todosContextDispatcher.Provider value={dispatch}>
                {children}
            </todosContextDispatcher.Provider>
        </todosContext.Provider>
    );
};

export default TodoProvider;

export const useTodos = () => useContext(todosContext);

export const useTodosActions = () => {
    const setTodos = useContext(todosContextDispatcher)

    // const todos = useContext(todosContext);

    // const todoHandler = (input) => {
    //     setTodos([...todos, NewTodo])
    // }

    // const compeleteTodo = (id) => {
    //     const index = todos.findIndex(todo => todo.id === id)

    //     const selectedTodos = { ...todos[index] }
    //     selectedTodos.isCompeleted = !selectedTodos.isCompeleted;

    //     const updatedTodos = [...todos]
    //     updatedTodos[index] = selectedTodos;
    //     setTodos(updatedTodos);
    //     // console.log(updatedTodos);
    // }

    // const removeTodo = (id) => {
    //     // console.log(id);
    //     const removeTodos = todos.filter(todo => todo.id !== id)
    //     setTodos(removeTodos)
    // }

    // const updatedTodo = (id, newValue) => {

    //     let today = new Date();
    //     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     let time = today.getHours() + ":" + today.getMinutes();
    //     let dateTime = date + ' ' + time;
    //     // console.log(id);

    //     const index = todos.findIndex(todo => todo.id === id)

    //     const selecteTodos = { ...todos[index] }
    //     selecteTodos.text = newValue;
    //     selecteTodos.updated = dateTime

    //     const updatedTodos = [...todos]
    //     updatedTodos[index] = selecteTodos;
    //     setTodos(updatedTodos);

    // }

    // return { todoHandler, compeleteTodo, removeTodo, updatedTodo }
}

