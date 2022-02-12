import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ToDoForm from './ToDoForm';

const EditModal = ({ close, show, todo, addTodoHandeler, onUpdatedTodo, editTodo, edit }) => {

    return (
        <>
            <Modal
                show={() => show(todo.id)}
                backdrop="static"
                keyboard={false}
            >
                <ModalHeader>
                    <Modal.Title>
                        <i class="bi bi-arrow-clockwise"></i>
                        Update todo
                    </Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    <ToDoForm addTodoHandeler={editTodo} edit={edit} />
                </Modal.Body>
                <Modal.Footer>
                   <button className='btn btn-sm btn-primary' onClick={()=> close()}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditModal;