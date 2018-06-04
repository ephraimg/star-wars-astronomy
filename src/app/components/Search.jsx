
import React from 'react';

export const Search = props => (
    <div className="search">
        <button className="search-button">
            {/* bg icon here */}
        </button><input 
            className="search-input" 
            placeholder="Search" 
            onChange={props.changeSearch} > 
        </input>
    </div>
);
