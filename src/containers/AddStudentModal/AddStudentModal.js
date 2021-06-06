import React, { useState, useEffect } from 'react'
import StudentForm from '../../components/StudentForm/StudentForm';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button';
import { validateDataOnSubmit, validateSingleInput } from '../../utils/formValidator';
import './AddStudentModal.css'
function AddStudentModal({ handleClose, handleShow, handleSubmit }) {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        address: '',
        course: '',
        gender: ''
    });
    const [errorVals, setErrorVals] = useState({});
    const [enableButton, setEnableButton] = useState(false);


    useEffect(() => {
        const checkValidity = () => {
            for (const attr in formValues) {
                if (errorVals[attr]?.length || !formValues[attr]?.length) {
                    setEnableButton(false);
                    return
                } else {
                    setEnableButton(true)
                }
            }
        }
        checkValidity()
    }, [formValues, errorVals])


    const handleChange = (e) => {
        const { name, value } = e.target;
        const errors = validateSingleInput(e.target);
        console.log(errors)
        setErrorVals((prevErrors) => ({
            ...prevErrors,
            [name]: errors[name]
        }))
        setFormValues((prevFormVals) => ({
            ...prevFormVals,
            [name]: value
        }))
    }

    const submitForm = () => {
        const { validator, status } = validateDataOnSubmit(formValues);
        if (status) {
            handleSubmit(formValues)
        } else {
            setErrorVals((prevErrors) => ({
                ...prevErrors,
                validator
            }))
        }
    }

    return (
        <Modal show={handleShow} onHide={handleClose} dialogClassName="neon__form" backdrop="static" keyboard={false} animation>
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
                <StudentForm onChangedValue={handleChange} errors={errorVals} />
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" size="lg" type="button" form="student-add-form" block onClick={() => submitForm()} disabled={!enableButton}>
                    Submit
                </Button>
            </ModalFooter>
        </Modal >
    )
}

export default AddStudentModal;
