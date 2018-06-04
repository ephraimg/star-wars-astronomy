
import React from 'react';
import { connect } from 'react-redux';
import { getPage, sort } from '../actions';
import { DataTable } from '../components/DataTable';
import { Nav } from '../components/Nav';

let Main = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const { search, planets, page, getPage, sort } = this.props;
        return (
            <div className="main">  
                <DataTable data={planets} sort={sort} />
                <Nav page={page} getPage={page => getPage(search, page)} />
            </div> 
        );
    }

}

const mapStateToProps = state => {
    return {
        search: state.search,
        planets: state.planets,
        sorted: state.sorted,
        page: state.page
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPage: (search, page) => dispatch(getPage(search, page)),
        sort: field => dispatch(sort(field))
    }
};

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export { Main };
