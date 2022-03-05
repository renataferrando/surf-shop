import React from 'react';
import RegisterForm from '../components/registerForm/RegisterForm';
import './_signup.scss'
const SignUp = () => {
    return (
    <div className='sign-up'>        
        <div className='form'>
            <RegisterForm/>
        </div>
        <div className='image'></div>
    </div>
    );
};

export default SignUp;