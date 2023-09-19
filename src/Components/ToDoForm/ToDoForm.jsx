import React, { useEffect, useRef, useState } from 'react';

const ToDoForm = (props) => {
    
    const [input, setInput] = useState( props.edit ? props.edit.text : '')

    console.log(input.value);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const inputRef = useRef(null)

    const ChangeHandler = (e) => {
        setInput(e.target.value)
        // console.log(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        if (!input | InputEvent.value === undefined) {
            alert("Pls write something")
            return;
        }

        props.addTodoHandler(input)
        setInput('')
    }
  
    return (
        <>
            <form onSubmit={submitHandler} className='col-12 bg-white d-flex justify-content-between align-items-center rounded my-2'>
                <input
                    type='text'
                    className='w-75 h-75 form-control mx-1'
                    placeholder={props.edit ? 'Write it again' : 'Plan something...'}
                    onChange={ChangeHandler}
                    value={input}
                    ref={inputRef}>
                </input>
                <button type='submit' className={` col-3 col-sm-3 h-100 ${ props.edit ? 'btn btn-sm btn-outline-secondary px-3' : 'btn btn-sm btn-primary px-3'}`}>
                    {props.edit ? 'Update' : '+ New'}
                </button>
            </form>
        </>
    );
};

export default ToDoForm;