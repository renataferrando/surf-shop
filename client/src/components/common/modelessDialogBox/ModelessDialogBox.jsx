import React, { forwardRef, useRef, useEffect } from 'react';
import './_modeless-dialog-box.scss'
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import UseClickOutside from '../UseClickOutside';

const ModelessDialogBox = forwardRef (({className, children, isOpen }, ref) => {
    const classes = classNames ('dialog-box', className, )
    const body = document.querySelector('body');


    return ReactDOM.createPortal (
        <>{isOpen &&
            <div className={classes}>
                {children}
            </div>}
        </>,
        document.body,
    );
});

export default ModelessDialogBox;