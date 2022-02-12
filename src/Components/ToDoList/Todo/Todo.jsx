import { useTodosActions } from '../../context/TodoProvider/TodoProvider';
import './Todo.css'

const Todo = ({ todo }) => {
    
    const { compeleteToDo, removeTodo , updatedTodo } = useTodosActions();

    return (
            <li key={todo.id} className={`list-group-item col-12 d-flex justify-content-between align-items-center ${todo.isCompeleted ? 'border border-secondary' : '' }`}>
                <div className='col-4'>
                   <p onClick={()=>compeleteToDo(todo.id)} className={`todo-text ${ todo.isCompeleted ? 'text-decoration-line-through text-muted' : '' }`}>{todo.text}</p>
                </div>
                <div className='col-4 d-flex flex-column h-100'>
                { todo.updated ? 
                <p className='todo-date col-12 text-scondary lead'>Updated : {todo.updated}</p> :
                <p className='todo-date col-12 text-scondary lead'>Created : {todo.created}</p> }
                </div>
                <div className='col-2 d-flex justify-content-evenly'>
                    <i class="bi bi-trash-fill text-danger" onClick={()=>removeTodo(todo.id)}></i>
                    <i class="bi bi-pencil-square text-secondary" onClick={()=>updatedTodo(todo.id)}></i>
                </div>
            </li>
    )
}

export default Todo;