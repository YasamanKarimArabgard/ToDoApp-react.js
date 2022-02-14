import { ToastBody } from 'react-bootstrap';
import { useTodosActions } from '../../context/TodoProvider/TodoProvider';
import './Todo.css'

const Todo = ({ todo, onEdit }) => {

    const dispatch = useTodosActions();

    return (
        <li key={todo.id} className={`list-group-item col-12 d-flex justify-content-between align-items-center ${todo.isCompleted ? 'border border-secondary' : ''}`}>
            <div className='col-4'>
                <p onClick={() => dispatch({ type: 'completeTodo', id: todo.id })} className={`todo-text ${todo.isCompleted ? 'text-decoration-line-through text-muted' : ''}`}>{todo.text}</p>
            </div>
            <div className='col-4 d-flex flex-column h-100'>
                {todo.updated ?
                    <p className='todo-date col-12 text-scondary lead'>Updated : {todo.updated}</p> :
                    <p className='todo-date col-12 text-scondary lead'>Created : {todo.created}</p>}
            </div>
            <div className='col-2 col-sm-1 d-flex justify-content-between'>
                <i class="bi bi-trash-fill text-danger" onClick={() => dispatch({ type: 'removeTodo', id: todo.id })}></i>
                {todo.isCompleted ? null : <i className="bi bi-pencil-square text-secondary" onClick={onEdit}></i>}
            </div>
        </li>
    )
}

export default Todo;