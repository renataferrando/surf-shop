import React from 'react';
import './_error-login.scss'
import error from '../../images/error.png'
import { useNavigate } from 'react-router-dom';

const ErrorLogin = ({ title, text, onClickError, link, onClickTry }) => {

    return (
        <div className='error-login'>
            <img width="100px"src={error}></img>
            <h4>{title}</h4> 
            <p onClick={onClickTry} className='try'>Try again</p>
            <p> {text} <a onClick={onClickError}>{link}</a></p>
        </div>
    );
};

export default ErrorLogin;