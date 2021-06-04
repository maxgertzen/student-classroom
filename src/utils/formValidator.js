const inputValidationTerms = {
    username: {
        required: true,
        pattern: /[a-zA-Z]{2,} /,
        msg: 'Username should not be less than 2 characters'
    },
    email: {
        required: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        msg: 'Invalid email address'
    },
    address: {
        required: true,
        pattern: /[a-zA-Z0-9]{10,}/,
        msg: 'Address should be no less than 10 characters'
    },
    course: {
        required: true,
    },
    gender: {
        required: true,
    }
}

const validateSingleInput = ({ target: { value, name } }) => {
    const errorsArr = []
    const validations = inputValidationTerms[name]

    if (validations.pattern && !validations.pattern.test(value)) {
        errorsArr.push(inputValidationTerms[name].msg)
    }

    if (validations.required && !value) {
        errorsArr.push(`${name} is required*`)
    }

    return { name: errorsArr }
}

const validateDataOnSubmit = (formValues) => {
    const validator = {}
    for (const name in inputValidationTerms) {
        if (name in formValues) {
            const value = formValues[name]
            const errors = validateSingleInput({ target: { value, name } })
            validator[name] = errors[name];
        }
    }

    return validator
}

export { validateSingleInput, validateDataOnSubmit }
