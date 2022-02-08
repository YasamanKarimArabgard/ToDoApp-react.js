import React from 'react';

const TodoList = ({ todos, onCompelete, onRemove}) => {

    const renderToDos = () => {
        if (todos.length === 0) return <h2 className='text-center'>You have nothing to do</h2>;

        return (todos.map(todo => {
            return <li key={todo.id} onClick={() => onCompelete(todo.id)} className='list-group-item col-12 d-flex justify-content-between'>
                <p className='col-9'>{todo.text}</p>
                <div className='col-2 d-flex justify-content-evenly'>
                    <i class="bi bi-trash-fill text-danger" onClick={()=>onRemove(todo.id)}></i>
                    <i class="bi bi-pencil-square text-inf"></i>
                </div>
            </li>
        }))
    }

    return (
        <div className='col-11 bg-white mt-2 rounded'>
            <ul className='list-group'>
                {renderToDos()}
            </ul>
        </div>
    );
};

export default TodoList;