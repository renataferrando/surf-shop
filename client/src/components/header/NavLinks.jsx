import React from 'react';
import './_nav-links.scss'
import classNames from 'classnames';
const NavLinks = ({className, mobile}) => {
    const classes = classNames ('nav-items', className, {
        '--mobile': mobile
    });
    return (
        <li className={classes}>
            <a href="">WETSUITS</a>
            <a href="">BOARDS</a>
            <a href="">ACCESORIES</a>
            <a href="">BRANDS</a>
        </li>
    );
};

export default NavLinks;