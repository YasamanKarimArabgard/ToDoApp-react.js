import React, { useState } from 'react';

const ToDoForm = (props) => {

    const [input, setInput] = useState('')

    const ChangeHandeler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }

    const SubmitHandeler = (e) => {
        e.preventDefault()

        if (!input) {
            alert("pls write something") 
            return;
        }

        const NewTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompeleted: false
        }

        props.setTodos([...props.todos, NewTodo])
        setInput("")

    }
    return (
        <form onSubmit={SubmitHandeler} className='col-11 bg-white border d-flex justify-content-evenly rounded p-1'>
            <input
                type='text'
                className='col-10 form-control w-75'
                placeholder='Plan something...'
                onChange={ChangeHandeler} value={input}>
            </input>
            <button type='submit' className='btn btn-sm btn-primary px-3'>Add</button>
        </form>
    );
};

export default ToDoForm;