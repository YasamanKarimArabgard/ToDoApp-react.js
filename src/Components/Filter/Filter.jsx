import React, { useState, useEffect } from 'react';
import FilterDate from './FilterDate/FilterDate';
import FilterTodo from './FilterTodo/FilterTodo';

const Filter = ({ setFilteredTodos, todos }) => {

    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedDate, setSelectedDate] = useState('Default');


    useEffect(() => {
        filterTodos(selectedOption.value)
    }, [todos, selectedOption])

    useEffect(() => {
        filterDates(selectedDate.value)
    }, [todos, selectedDate])

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

    const latestDate = () => {
        const todosCopy = [...todos]
        setFilteredTodos(todosCopy.sort((a, b) => b.date - a.date))
    }

    const earliestDate = () => {
        const todosCopy = [...todos]
        setFilteredTodos(todosCopy.sort((a, b) => a.date - b.date))
    }

    const filterDates = (status) => {
        switch (status) {
            case 'Latest':
                return latestDate()
            case 'Earliest':
              return earliestDate()
            default:
                setFilteredTodos(todos)
        }
    }

    const selectTodoHandler = (e) => {
        setSelectedOption(e);
        filterTodos(e.value)
    }

    const selectDateHandler = (e) => {
        setSelectedDate(e);
        filterDates(e.value)
    }

    return (
        <>
            {
                todos.length == 0 ?
                    null :
                    <div className='col-12 col-sm-12 d-flex flex-wrap flex-sm-nowrap align-items-center pt-1 px-1'>
                    <h5 className='mx-1 text-secondary d-none d-sm-block'>Filter by : </h5>
                        <FilterTodo
                            onChange={selectTodoHandler}
                            selectedOption={selectedOption} />
                        <FilterDate
                            onChange={selectDateHandler}
                            selectedDate={selectedDate} />
                    </div>
            }
        </>
    );
};

export default Filter;