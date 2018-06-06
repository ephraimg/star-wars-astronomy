
import React from 'react';
import { connect } from 'react-redux';

import { Search as SearchComp } from '../../components/Search/Search';
import { changeSearch, fetch, fetchFilms } from './actions';

let Search = class extends React.Component {

    constructor(props) {
        super(props);
        this.fetchCurrentSearch = this.fetchCurrentSearch.bind(this);
    }
    fetchCurrentSearch() {
        this.props.fetch(this.props.searchText);
    }
    render() {  return (
        <SearchComp 
            searchText={this.props.searchText}
            fetching={this.props.fetching}
            changeSearch={this.props.changeSearch}
            handleClick={this.fetchCurrentSearch}
            handleKeyPress={e => e.keyCode === 13 ? this.fetchCurrentSearch() : null}
        /> );
    }
};

const mapStateToProps = state => {
    return {
        searchText: state.search.searchText,
        fetching: state.search.fetching
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: e => dispatch(changeSearch(e.target.value)),
        fetch: search => dispatch(fetch(search)),
        fetchFilms: () => dispatch(fetchFilms())
    }
};

Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export { Search };
