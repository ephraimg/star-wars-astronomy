
import React from 'react';
import { Spinner } from './Spinner';

export const Search = props => (
    <div className="search">
        <button 
            className="search-button" 
            onClick={props.handleClick} 
            /* prevent focus on button */
            onMouseDown={e => e.preventDefault()} >
        {/* bg icon here */}
        </button>
        <input 
            className="search-input" 
            placeholder="Search" 
            value={props.search}
            onChange={props.changeSearch} 
            onKeyDown={props.handleKeyPress} >
        </input>
        { props.fetching ? <Spinner /> : null }
    </div>
);
