import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ToDoForm from '../ToDoForm';

const EditModal = ({ show, editTodo, edit , addTodoHandeler}) => {

    return (
        <>
            <Modal
                show={() => show()}
                backdrop="static"
                keyboard={false}
                // onHide={()=>setShow(true)}
            >
                <ModalHeader closeButton>
                    <Modal.Title>
                        <i class="bi bi-arrow-clockwise"></i>
                        Update todo
                    </Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    <ToDoForm addTodoHandeler={editTodo} edit={edit} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditModal;