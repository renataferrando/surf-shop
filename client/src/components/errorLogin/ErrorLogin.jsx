import React from 'react';
import './_error-login.scss'
import error from '../../images/error.png'
import { useNavigate } from 'react-router-dom';

const ErrorLogin = () => {
    const navigate = useNavigate()
    return (
        <div className='error-login'>
            <img width="100px"src={error}></img>
            <h4>Invalid email or password</h4>
            <p> Not registered? <a onClick={()=>{navigate("/signup")}}>Click here</a></p>
        </div>
    );
};

export default ErrorLogin;