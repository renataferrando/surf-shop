import './header.scss'
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames'
import logo from '../../images/logo.png'
import SearchBar from '../common/searchBar/SearchBar'
import NavLinks from './NavLinks';
import useWindowSize from '../../js/UseWindowSize';
import Drawer from '../common/drawer/Drawer';
import ModelessDialogBox from '../common/modelessDialogBox/ModelessDialogBox';
import Button from '../common/button/Button'
import { useNavigate } from "react-router-dom";
import LoginForm from '../loginForm/LoginForm';
import TestForm from '../loginForm/TestForm';
import UseClickOutside from '../common/UseClickOutside';
import Icon from '../common/icon/Icon';

const Header = ({user, cart, isLoggedIn }) => {
    const [height, width] = useWindowSize()
    const [menuOpen, setMenuOpen] = useState(false)
    const [show, setShow] = useState()
    const navigate = useNavigate()
    const [loginOpen, setLoginOpen] = useState(false)



    const ref = useRef();
    UseClickOutside(ref, () => setShow(!show));
    const handleMouseEnter = e => {
        setShow(true)
    }
    const handleClick = e => {
        setShow(!show)
        setLoginOpen(false)
    }
    const handleMouseLeave = e => {
        setTimeout(()=> {
            setShow(false)
        }, 300)
        
    }

    const isMobile = width < 768
    const headerClasses = classNames('header', {
        '--user': user,
        '--cart': cart,
        '--mobile': isMobile,
    })
    
    return (
       <> <nav className={headerClasses}>
           {isMobile && (<Icon onClick={()=>setMenuOpen(true)} className="menu-icon" name="menu"/>)} 
            <Drawer position="left" width="mobile" isOpen={menuOpen} onClose={() => setMenuOpen(false)} closeBtn={true} >
                <NavLinks mobile={true}/>
           </Drawer>
           <img className = "logo"src={ logo } ></img>
            {!isMobile && <NavLinks/>}
            <ul className='tools'>
                <SearchBar iconName="search" isMobile={isMobile ? true : false}/>
                <Icon name="user" onClick={handleClick} />
                <Icon name="cart"/>
            </ul>
        </nav>
        {show && 
        <ModelessDialogBox isOpen={show} className="user-menu">
        {!isLoggedIn ?
        (<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='log-in'>
            <p>Who is there?</p>
            <Button onClick={() => setLoginOpen(true) & (setShow(false))}className="user-btn"label="Log In"></Button>
            <p>Don't have an account?</p>
            <Button onClick={() => navigate("/signup") & (setShow(false))} className="user-btn" label="Sign Up"></Button>
        </div>) : (
        <div>
            <p>Hola </p>
            <Button label="My Orders"/>
            <Button label="My Account"/>
        </div>

        )}
        </ModelessDialogBox> } 
        <Drawer 
            className="login" 
            position="center" 
            width="50%" 
            isOpen={loginOpen} 
            onClose={()=>setLoginOpen(false)} 
            positionCloseRight={true}
            closeBtn={true}
            >
            <LoginForm closeModal={(handleClick)}/>
        </Drawer>
        </>
    );
};

export default Header;