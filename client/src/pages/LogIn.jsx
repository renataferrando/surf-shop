import React, {useState} from 'react';
import Drawer from '../components/common/drawer/Drawer';
import LoginForm from '../components/loginForm/LoginForm';
import { useNavigate } from "react-router-dom";

const LogIn = ({loginOpen, onClose}) => {
  
    const navigate = useNavigate()
    const goToSignUp = () => {
        navigate("/signup")
    }
   const closeLoginAfterError = () => {
        onClose()
        goToSignUp()
    }
    
    return (
        <Drawer 
            className="login" 
            position="center" 
            width="50%" 
            isOpen={loginOpen} 
            onClose={onClose} 
            positionCloseRight={true}
            closeBtn={true}
            >
            <LoginForm closeModal={onClose} onClickError={closeLoginAfterError} />
        </Drawer>
    );
};

export default LogIn;