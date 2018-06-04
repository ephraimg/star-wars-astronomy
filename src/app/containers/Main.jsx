
import React from 'react';
import { connect } from 'react-redux';

import { DataTable } from '../components/DataTable';
import { Nav } from '../components/Nav';

let Main = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const { search, results, page, getPage } = this.props;
        return (
            <div className="main">  
                <DataTable data={results} />
                <Nav page={page} getPage={page => getPage(search, page)} />
            </div> 
        );
    }

}

const mapStateToProps = state => {
    return {
        search: state.search,
        results: state.results,
        page: state.page
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPage: (search, page) => dispatch(getPage(search, page))
    }
};

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export { Main };
