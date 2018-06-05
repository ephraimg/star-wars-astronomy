
import React from 'react';
import { connect } from 'react-redux';
import { fetch, sort, setSort } from '../actions';
import { DataTable } from '../components/DataTable';
import { Nav } from '../components/Nav';

let Main = class extends React.Component {

    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(field) {
        this.props.setSort(field);
        this.props.sort(field);
    }
    render() { 
        const { search, planets, page, fetch } = this.props;
        return (
            <div className="main">  
                <div className="table-wrapper">
                    <DataTable data={planets} sort={this.handleSort} />
                </div>
                <Nav page={page} count={planets.count} fetchPage={page => fetch(search, page)} />
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
        fetch: (search, page) => dispatch(fetch(search, page)),
        sort: field => dispatch(sort(field)),
        setSort: field => dispatch(setSort(field))
    }
};

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export { Main };
