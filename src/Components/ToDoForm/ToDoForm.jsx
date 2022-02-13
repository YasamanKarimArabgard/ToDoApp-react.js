import React, { useEffect, useRef, useState } from 'react';

const ToDoForm = (props) => {
    
    const [input, setInput] = useState( props.edit ? props.edit.text : '')

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const inputRef = useRef(null)

    const ChangeHandeler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }

    const submitHandeler = (e) => {
        e.preventDefault()

        if (!input) {
            alert("Pls write something")
            return;
        }

        props.addTodoHandeler(input)
        setInput('')
    }
  
    return (
        <>
            <form onSubmit={submitHandeler} className='col-12 bg-white d-flex justify-content-between align-items-center rounded border p-1'>
                <input
                    type='text'
                    className='w-75 h-75 form-control mx-1'
                    placeholder={props.edit ? 'Write it again' : 'Plan something...'}
                    onChange={ChangeHandeler}
                    value={input}
                    ref={inputRef}>
                </input>
                <button type='submit' className={` col-3 col-sm-2 ${ props.edit ? 'btn btn-sm btn-outline-secondary px-3' : 'btn btn-sm btn-primary px-3'}`}>
                    {props.edit ? 'Update' : <i class="bi bi-plus"> New</i>}
                </button>
            </form>
        </>
    );
};

export default ToDoForm;