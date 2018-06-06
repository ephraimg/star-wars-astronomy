
import React from 'react';
import { connect } from 'react-redux';
import { sort, setSort } from './actions';
import { fetch } from '../Search/actions';
import { DataTable } from '../../components/DataTable/DataTable';
import { Nav } from '../../components/Nav/Nav';

export class DumbMain extends React.Component {

    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(field) {
        this.props.setSort(field);
        this.props.sort();
    }
    render() { 
        const { prevSearch, planets, page, fetch } = this.props;
        return (
            <div className="main">  
                <div className="table-wrapper">
                    <DataTable data={planets} sort={this.handleSort} />
                </div>
                <Nav page={page} count={planets.count} fetchPage={page => fetch(prevSearch, page)} />
            </div> 
        );
    }

}

const mapStateToProps = state => {
    return {
        prevSearch: state.search.prevSearch,
        page: state.search.page,
        planets: state.planets,
        sorted: state.sorted
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: (search, page) => dispatch(fetch(search, page)),
        sort: field => dispatch(sort(field)),
        setSort: field => dispatch(setSort(field))
    }
};

export const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(DumbMain);
