import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import './search-bar.scss'
import UseClickOutside from '../UseClickOutside';
import Icon from '../icon/Icon';

const SearchBar = ({isMobile, iconName}) => {
    const [search, setSearch] = useState()
    const ref = useRef();
    UseClickOutside(ref, () => setSearch(false));

    return (
        <>
        <div ref={ref} className='search-bar'>
            <Icon name={iconName} onClick= {()=>setSearch(!search)}/>
            {!isMobile ?
            (search && <input ref={ref} placeholder ="Search"type="text"/> )
             : 
            (<div ref={ref} className={!search ? "search-mobile" : "search-mobile --show"}>
                <Icon name="arrowLeft" onClick={()=>setSearch(!search)}/>
                <input placeholder='Search'></input>
            </div>
            )}
        </div>
        </>
    );
};

export default SearchBar;