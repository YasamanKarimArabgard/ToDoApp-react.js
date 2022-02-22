import { ToastBody } from 'react-bootstrap';
import { useTodosActions } from '../../../context/TodoProvider/TodoProvider';
import './Todo.css'

const Todo = ({ todo, onEdit }) => {

    const dispatch = useTodosActions();

    return (
        <li key={todo.id} className={`list-group-item col-12 d-flex justify-content-between align-items-center mb-1 border p-2${todo.isCompleted ? 'border border-secondary' : ''}`}>
            <div className='col-3'>
                <p onClick={() => dispatch({ type: 'completeTodo', id: todo.id })} className={`todo-text d-flex flex-wrap overflow-hidden p-1 ${todo.isCompleted ? 'text-decoration-line-through text-muted' : ''}`}>{todo.text}</p>
            </div>
            <div className='col-6 d-flex flex-column h-100 justify-content-start px-1'>
                {todo.updated ?
                    <p className='todo-date col-12 text-scondary lead'>Updated : {todo.updated}</p> :
                    <p className='todo-date col-12 text-scondary lead'>Created : {todo.created}</p>}
            </div>
            <div className='col-2 col-sm-1 d-flex justify-content-end'>
                {todo.isCompleted ? null : <i className="bi bi-pencil-square text-secondary mx-2" onClick={onEdit}></i>}
                <i class="bi bi-trash-fill text-danger mx-2" onClick={() => dispatch({ type: 'removeTodo', id: todo.id })}></i>
            </div>
        </li>
    )
}

export default Todo;