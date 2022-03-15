import React from 'react';
import './_nav-links.scss'
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

const NavLinks = ({className, mobile}) => {
    const classes = classNames ('nav-items', className, {
        '--mobile': mobile
    });
    const navigate = useNavigate()
    return (
        <li className={classes}>
            <a href="">WETSUITS</a>
            <a href="">BOARDS</a>
            <a href="" onClick={()=> navigate("/accesories")}>ACCESORIES</a>
            <a href="">BRANDS</a>
        </li>
    );
};

export default NavLinks;