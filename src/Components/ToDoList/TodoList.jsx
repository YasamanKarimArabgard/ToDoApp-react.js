import React, { useState } from 'react';
import EditModal from './EditModal/EditModal'
import Todo from './Todo/Todo';
import { useTodosActions } from '../../context/TodoProvider/TodoProvider';

const TodoList = ({todos}) => {

    const dispatch = useTodosActions();

    const [edit, setEdit] = useState({ id: null, text: '' })

    const editTodo = (newValue) => {
        dispatch({ type: 'updatedTodo', id: edit.id, value: newValue })
        setEdit({ id: null, text: '' })
    }

    const renderToDos = () => {
        if (todos.length === 0) return <h2 className='text-center text-secondary border rounded p-2'>Set something to do</h2>;
        return (todos.map(todo => {
            return <Todo
                key={todo.id}
                todo={todo}
                onEdit={() => setEdit(todo)}
            />
        }))
    }

    return (
        <div className='col-12 bg-white mt-2 rounded'>
            <ul className='list-group col-12'>{edit.id ? <EditModal editTodo={editTodo} edit={edit} setEdit={setEdit} todos={todos}/> : renderToDos()}</ul>
        </div>
    );
};

export default TodoList;