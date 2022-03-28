import React, { useRef } from 'react';
import './_modeless-dialog-box.scss'
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import useClickOutside from '../hooks/useClickOutside';

const ModelessDialogBox = ({ className, children, isOpen, onClose }) => {
    const classes = classNames ('dialog-box', className)
    const ref = useRef()
    useClickOutside(ref, () => onClose());
    const handleMouseEnter = e => {
        isOpen = true
    }
    const handleMouseLeave = e => {
        setTimeout(()=> {
            onClose()
        }, 300)
    }
    
    return ReactDOM.createPortal (
        <>
            <div 
                ref={ref} 
                aria-hidden= {isOpen ? "false" : "true"} 
                className={classes} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClose={onClose}
                >
                {children}
            </div>
        </>,
        document.body,
    );
};

export default ModelessDialogBox;