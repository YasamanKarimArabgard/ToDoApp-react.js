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
        case 'todoHandler':
            let CreateToday = new Date();
            let CreateDate = CreateToday.getFullYear() + '-' + (CreateToday.getMonth() + 1) + '-' + CreateToday.getDate();
            let CreateTime = CreateToday.getHours() + ":" + CreateToday.getMinutes();
            let CreateDateTime = CreateDate + ' ' + CreateTime ;

            const NewTodo = {
                id: Math.floor(Math.random() * 1000),
                text: action.value,
                isCompeleted: false,
                created: CreateDateTime
            }

            return [...state, NewTodo]
        case 'removeTodo':
            const removeTodos = state.filter(todo => todo.id !== action.id)
            return removeTodos
        case 'completeTodo':
            const index = state.findIndex(todo => todo.id === action.id)

            const selectedTodos = { ...state[index] }
            selectedTodos.isCompleted = !selectedTodos.isCompleted;

            const updatedTodosComplete = [...state]
            updatedTodosComplete[index] = selectedTodos;
            return updatedTodosComplete
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
export const useTodosActions = () => useContext(todosContextDispatcher);

