
import React from 'react';
import { connect } from 'react-redux';
import { fetch, sort, setSort } from './actions';
import { DataTable } from '../../components/DataTable/DataTable';
import { Nav } from '../../components/Nav/Nav';

let Main = class extends React.Component {

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
        console.log('\n\n\nprevSearch:' + prevSearch + '\n\n\n');
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

Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export { Main };
