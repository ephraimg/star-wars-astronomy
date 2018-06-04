
import React from 'react';

export const Search = props => (
    <div className="search">  
        <input 
            id="search" 
            placeholder="Search" 
            onChange={props.changeSearch} > 
        </input>
    </div>
);
