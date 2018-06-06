
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { Banner } from '../../components/Banner/Banner';
import { Search } from '../Search/Search';
import { Main } from '../Main/Main';
import { fetchFilms } from './actions';

export const DumbApp = class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Get list of all films from API to replace
        // film urls in planet entries with film names
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

export const App = connect(
    null,
    mapDispatchToProps
)(DumbApp);
