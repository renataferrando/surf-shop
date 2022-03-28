import React, {useState, useRef} from 'react';
import './search-bar.scss'
import useClickOutside from '../hooks/useClickOutside';
import Icon from '../icon/Icon';

const SearchBar = ({isMobile, iconName}) => {
    const [search, setSearch] = useState()
    const ref = useRef();
    useClickOutside(ref, () => setSearch(false));

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