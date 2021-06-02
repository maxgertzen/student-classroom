import React from 'react'
import StudentForm from '../../components/StudentForm/StudentForm';
function RegisterPage() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
            <h3 className="h3 d-block">Student Details</h3>
            <p className="h6">
                Hello Student! Please fill out your details
            </p>
            <StudentForm />
        </div>
    )
}

export default RegisterPage;
