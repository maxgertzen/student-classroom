import React from 'react';
import Form from 'react-bootstrap/Form'

function FormErrorMessage({ errors }) {
    return (
        <Form.Control.Feedback type="invalid">
            {errors ?
                errors.map((value, index) => <span key={index}>{value}</span>)
                : null
            }
        </Form.Control.Feedback>
    )
}

export default FormErrorMessage