import React from 'react';

const NavBar = ({ unCompeleted, compeleted, allTodos }) => {

    if (!unCompeleted) return null;
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
                <h1 className='p-2 secondary text-truncate'>Compeleted</h1>
            </div>
        </header>

    );
};

export default NavBar;