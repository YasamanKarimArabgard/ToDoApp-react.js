import React from 'react';
import { useTodos } from '../context/TodoProvider/TodoProvider'

const NavBar = ({unCompleted, completed, allTodos }) => {

    const todos = useTodos()

    if (!unCompleted) return todos.length == 0 ? null : 
    <p className='col-12 rounded border border-success p-1 bg-white my-1 py-2 text-success text-center'>You have done it all !</p> ;
    return (
        <header className='col-12 bg-white d-flex align-items-center justify-content-between mb-1'>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-info text-light'>{allTodos}</span>
                <h4 className='p-2 text-secondary text-truncate'>All todos</h4>
            </div>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-warning text-light'>{unCompleted}</span>
                <h4 className='p-2 text-secondary text-truncate'>Not completed</h4>
            </div>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-success text-light'>{completed}</span>
                <h1 className='p-2 text-secondary text-truncate'>Completed</h1>
            </div>
        </header>

    );
};

export default NavBar;