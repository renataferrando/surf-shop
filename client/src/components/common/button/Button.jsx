import React from 'react';
import classNames from 'classnames';
import './_button.scss'

const Button = ({className, onClick, label, type}) => {
    const classes = classNames ('btn', className)
    return (
        <button className={classes} type={type} onClick={onClick}>
            {label}       
        </button>
    );
};

export default Button;