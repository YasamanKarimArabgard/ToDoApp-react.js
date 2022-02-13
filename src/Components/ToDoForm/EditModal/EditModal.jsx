import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ToDoForm from '../ToDoForm';

const EditModal = ({ editTodo, edit, addTodoHandler }) => {

    const [show, setShow] = useState(false);

    const showModal = () => setShow(false)
    const closeModal = () => setShow(true)

    return (
        <>
            <Modal
                show={() => showModal()}
                backdrop="static"
                keyboard={false}
                onHide={() => closeModal()}
            >
                <ModalHeader closeButton>
                    <Modal.Title>
                        <i class="bi bi-arrow-clockwise"></i>
                        Update todo
                    </Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    <ToDoForm addTodoHandler={editTodo} edit={edit} />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditModal;