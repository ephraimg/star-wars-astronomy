
import React from 'react';

export class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const { page, getPage } = this.props;
        return (
            <div className="nav">  
                <h1>Nav controls here. Current page: {page}</h1>
            </div> 
        );
    }
};
