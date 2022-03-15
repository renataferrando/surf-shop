import React, { useState } from 'react';
import './_navigation.scss'
import classNames from 'classnames';
import Icon from '../icon/Icon';

const Navigation = ({className, title, hasList}) => {
    const classes = classNames ('navigation', className)
    const [ listOpen, setListOpen ] = useState()
    
    console.log(listOpen)

    hasList=true

    const handleClick = () => {
        if (hasList === true ) {
            setListOpen(!listOpen)
        }
    }

    return (
        <div className={classes}>
            <div className='item'>
                <h4>{title}</h4>
                <Icon name= {listOpen ? "minus" : "plus"} className={hasList ? "--active" : ""} onClick={handleClick}/>
            </div>
                <ul className={listOpen ? "list --open" : "list"}>
                    <a href="">Creature</a>
                    <a href="">Free Life</a>
                    <a href="">Shock n' blue</a>
                </ul>            
        </div>
    );
};

export default Navigation;