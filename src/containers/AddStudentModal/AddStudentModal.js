import React, { useState } from 'react'
import StudentForm from '../../components/StudentForm/StudentForm';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';
import { validateDataOnSubmit, validateSingleInput } from '../../utils/formValidator';

function AddStudentModal({ handleClose, handleShow, handleSubmit }) {
    const [formValues, setFormValues] = useState({});
    const [errorVals, setErrorVals] = useState([]);
    const [isValid, setIsValid] = useState(false);

    const handleChange = (target) => {
        const { name, value } = target;
        setErrorVals(validateSingleInput(target))
        setFormValues((prevFormVals) => ({
            ...prevFormVals,
            [name]: value
        }))
    }

    const submitForm = () => {
        const errors = validateDataOnSubmit(formValues);
        if (!errors.length) {
            setIsValid(true)
            handleSubmit(formValues)
        } else {
            setErrorVals(errors)
        }
    }

    return (
        <Modal show={handleShow} onHide={handleClose}>
            <ModalHeader closeButton>
                <div className="modal-header-fix">
                    <Modal.Title className="text-center">
                        <h3 className="h3 d-block">Student Details</h3>
                        <p className="h6">
                            Hello Student! Please fill out your details
                        </p>
                    </Modal.Title>
                </div>
            </ModalHeader>
            <ModalBody>
                <StudentForm onChangedValue={handleChange} errors={errorVals} isValid={isValid} />
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" size="lg" type="submit" block onClick={() => submitForm()} disabled={!isValid}>
                    Submit
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default AddStudentModal;
