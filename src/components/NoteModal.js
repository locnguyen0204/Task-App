import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewNote, EditNote } from '../services/notes';

export const NewNoteModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>Thêm Ghi Nhớ</Button>
        
        <NoteModal note={null} handleFormSubmit={NewNote} show={show} handleClose={handleClose} />
    </div>
}

export const EditNoteModal = ({ note }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <button onClick={handleShow} className='edit-btn'></button>
        <NoteModal note={note} handleFormSubmit={EditNote} show={show} handleClose={handleClose} />
    </div>
}
const displayOption = ['có', 'không']
const NoteModal = ({ note, handleFormSubmit, show, handleClose }) => {
    const [modalNote, setModalNote] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalNote(note);
    }, [note]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ghi nhớ</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalNote);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalNote === null ? '' : modalNote.value}
                            onChange={event => setModalNote({ ...modalNote, value: event.target.value })} />
                        <Button variant="success" onClick={() => setModalNote({ ...modalNote, isCompleted: true })} >Hoàn Thành</Button>
                        <Button variant="danger" onClick={() => setModalNote({ ...modalNote, isCompleted: false })} >Chưa hoàn thành</Button>
                    </InputGroup>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ
            </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Lưu
            </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}