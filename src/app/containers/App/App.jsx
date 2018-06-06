
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { Banner } from '../../components/Banner/Banner';
import { Search } from '../Search/Search';
import { Main } from '../Main/Main';
import { fetchFilms } from './actions';

let App = class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchFilms();
    }
    render() { return (
        <div>  
            <Banner />
            <Search />
            <Main />
        </div> );
    }    
}


const mapDispatchToProps = dispatch => {
    return {
        fetchFilms: () => dispatch(fetchFilms())
    }
};

App = connect(
    null,
    mapDispatchToProps
)(App);

export { App };