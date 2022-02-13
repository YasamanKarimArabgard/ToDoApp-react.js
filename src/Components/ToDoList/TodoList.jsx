import React, { useState } from 'react';
import EditModal from '../ToDoForm/EditModal/EditModal';
import ToDoForm from '../ToDoForm/ToDoForm';
import Todo from './Todo/Todo';
import { useTodos } from '../context/TodoProvider/TodoProvider';

const TodoList = ({ onUpdatedTodo, onEdit }) => {

    const todos = useTodos();

    const [edit, setEdit] = useState({ id: null, text: '' })

    const editTodo = (newValue) => {

        onUpdatedTodo(edit.id, newValue)
        setEdit({ id: null, text: '' })
    }

    const renderToDos = () => {
        if (todos.length === 0) return <h2 className='text-center text-secondary border rounded p-2'>Set something todo</h2>;
        return (todos.map(todo => {
            return <Todo
                key={todo.id} todo={todo} onEdit={()=>setEdit(todo)} />
        }))
    }

    return (
        <div className='col-12 bg-white mt-2 rounded'>
            <ul className='list-group col-12'>{edit.id ? <EditModal editTodo={editTodo} edit={edit} /> : renderToDos()}</ul>
        </div>
    );
};

export default TodoList;