import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ToDoForm from '../../ToDoForm/ToDoForm';

const EditModal = ({ editTodo, edit, addTodoHandler, setEdit, todos }) => {

    const [show, setShow] = useState(false);

    const showModal = () => setShow(false)

    return (
        <>
            <Modal
                show={() => showModal()}
                backdrop="static"
                keyboard={false}
                onHide={() => setEdit(() => !edit)}
            >
                <ModalHeader closeButton>
                    <Modal.Title>
                        <i className="bi bi-arrow-clockwise"></i>
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