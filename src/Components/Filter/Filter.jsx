import React, { useState, useEffect } from 'react';
import FilterDate from './FilterDate/FilterDate';
import FilterTodo from './FilterTodo/FilterTodo';
import { useTodos } from '../context/TodoProvider/TodoProvider';

const Filter = ({ setFilteredTodos }) => {

    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedDateOption, setSelectedDateOption] = useState('Default');

    const todos = useTodos();

    useEffect(() => {
        filterTodos(selectedOption.value)
    }, [todos, selectedOption])

    useEffect(() => {
        filterTodos(selectedDateOption.value)
    }, [todos, selectedDateOption])

    const filterTodos = (status) => {
        switch (status) {
            case 'Notcompleted':
                setFilteredTodos(todos.filter(t => !t.isCompleted));
                break;
            case 'Completed':
                setFilteredTodos(todos.filter(t => t.isCompleted));
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
        setSelectedOption(e);
        filterTodos(e.value)
    }

    const selectDateHandler = (e) => {
        setSelectedDateOption(e);
        filterDates(e.value)
    }

    return (
        <>
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
        </>
    );
};

export default Filter;