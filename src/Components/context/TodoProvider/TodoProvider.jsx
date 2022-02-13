import React, { useContext, useState, useEffect} from 'react';

const getItemsfromLS = () => {
    const items = localStorage.getItem("todos")
    if (items) {
        return JSON.parse(localStorage.getItem("todos"))
    }
    else {
        return []
    }
}

const todosContext = React.createContext();
const setTodosContext = React.createContext();

const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState(getItemsfromLS())

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <todosContext.Provider value={todos}>
            <setTodosContext.Provider value={setTodos}>
                {children}
            </setTodosContext.Provider>
        </todosContext.Provider>
    );
};

export default TodoProvider;

export const useTodos = () => useContext(todosContext);

export const useTodosActions = () => {
    const setTodos = useContext(setTodosContext)

    const todos = useContext(todosContext);

    const todoHandler = (input) => {

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

    const compeleteTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id)

        const selectedTodos = { ...todos[index] }
        selectedTodos.isCompeleted = !selectedTodos.isCompeleted;

        const updatedTodos = [...todos]
        updatedTodos[index] = selectedTodos;
        setTodos(updatedTodos);
        // console.log(updatedTodos);
    }

    const removeTodo = (id) => {
        // console.log(id);
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

    }

    return {todoHandler,compeleteTodo, removeTodo, updatedTodo}
}

