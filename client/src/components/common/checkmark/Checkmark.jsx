
import React from 'react';

import './checkmark.scss'

const Checkmark = ({name, register, label}) => {
    return (
        <label className="label">{label}
            <input className="input"
            name={name} 
            type="checkbox"
            {...register(name)}
            />
            <span className="checkmark"></span>
        </label>
    );
};

export default Checkmark;


