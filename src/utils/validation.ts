type UserInformation = {
    email:string
    password:string
}

function validateUser(values: UserInformation){
    const errors = {
        email :'',
        password :'',
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
        errors.email = 'Wrong email address.'
    }
    if (values.password.length < 8 || values.password.length > 20){
        errors.password = 'Password should be 8 - 20 words.'
    }
    return errors;
}

function validateLogin(values: UserInformation) {
    return validateUser(values)
}

function validateSignup(values: UserInformation & {passwordConfirm:string;}){
    const errors = validateUser(values)
    const signupErrors = {...errors, passwordConfirm:''}

    if (values.password !== values.passwordConfirm){
        signupErrors.passwordConfirm = 'Wrong Password'
    }
    return signupErrors
}

export {validateLogin,validateSignup}