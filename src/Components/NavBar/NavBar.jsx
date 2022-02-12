import React from 'react';

const NavBar = ({todos ,unCompeleted, compeleted, allTodos }) => {

    if (!unCompeleted) return todos.length == 0 ? null : 
    <p className='col-12 rounded border p-1 bg-white my-1 py-2 text-success text-center'>You have done it all !</p> ;
    return (
        <header className='col-12 bg-white d-flex align-items-center justify-content-between mb-1'>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-info text-light'>{allTodos}</span>
                <h4 className='p-2 text-secondary text-truncate'>All todos</h4>
            </div>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-warning text-light'>{unCompeleted}</span>
                <h4 className='p-2 text-secondary text-truncate'>Not compeleted</h4>
            </div>
            <div className='col-4 d-flex align-items-center rounded border px-1'>
                <span className='text-light px-1 badge bg-success text-light'>{compeleted}</span>
                <h1 className='p-2 text-secondary text-truncate'>Compeleted</h1>
            </div>
        </header>

    );
};

export default NavBar;