
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { Banner } from '../components/Banner';
import { Search } from './Search';
import { Main } from './Main';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { return (
        <div>  
            <Banner />
            <Search />
            <Main />
        </div> );
    }    
}
