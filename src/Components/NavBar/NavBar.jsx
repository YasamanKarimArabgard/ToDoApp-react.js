import React from 'react';
import { useTodos } from '../../context/TodoProvider/TodoProvider'

const NavBar = ({ unCompleted, completed, allTodos }) => {

    const todos = useTodos()

    if (todos.length == 0) return <p className='col-12 rounded bg-white text-secondary text-center p-2'>You have nothing to do !</p>
    return (
        <header className='col-12 bg-white d-flex align-items-center justify-content-sm-center justify-content-between  my-1'>
            <div className='col-4 col-sm-2 d-flex align-items-center px-1'>
                <h4 className='p-2 text-secondary text-truncate text-info'>All todos</h4>
                <span className='text-light px-1 badge bg-info text-light rounded-pill'>{allTodos}</span>
            </div>
            <div className='col-4 col-sm-2 d-flex align-items-center px-1'>
                <h4 className='p-2 text-secondary text-truncate text-warning'>Not completed</h4>
                <span className='text-light px-1 badge bg-warning text-light rounded-pill'>{unCompleted}</span>
            </div>
            <div className='col-4 col-sm-2 d-flex align-items-center px-1'>
                <h1 className='p-2 text-secondary text-truncate text-success'>Completed</h1>
                <span className='text-light px-1 badge bg-success text-light rounded-pill'>{completed}</span>
            </div>
        </header>

    );
};

export default NavBar;