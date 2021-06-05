import React from 'react';
import './FormErrorMessage.css'

function FormErrorMessage({ errors }) {
    return (
        <>
            {
                errors ?
                    <div className={`errors-container ${errors.length > 1 ? 'multipleErr' : ''} d-flex`}>
                        {errors.map((error, idx) => {
                            return (
                                <small
                                    className="form-text text-danger text-capitalize"
                                    key={idx}
                                >
                                    {error}
                                </small>
                            )
                        })}
                    </div >
                    :
                    <div className="errors-container"></div>
            }
        </>
    )
}

export default FormErrorMessage