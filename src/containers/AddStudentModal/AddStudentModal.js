import React, { useState } from 'react'
import StudentForm from '../../components/StudentForm/StudentForm';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function AddStudentModal({ handleClose, handleShow, handleSubmit }) {
    const [formValues, setFormValues] = useState({});

    const handleChange = (target) => {
        const { name, value } = target;

        setFormValues((prevFormVals) => ({
            ...prevFormVals,
            [name]: value
        }))
    }
    return (
        <Modal show={handleShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <div className="modal-header-fix">
                    <Modal.Title className="text-center">
                        <h3 className="h3 d-block">Student Details</h3>
                        <p className="h6">
                            Hello Student! Please fill out your details
                        </p>
                    </Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                <StudentForm onChangedValue={handleChange} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" size="lg" type="submit" block onClick={() => handleSubmit(formValues)}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddStudentModal;
