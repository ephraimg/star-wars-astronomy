
import React from 'react';
import { connect } from 'react-redux';

import { Search as SearchComp } from '../components/Search';
import { changeSearch, fetch } from '../actions';

let Search = class extends React.Component {

    constructor(props) {
        super(props);
        this.fetchCurrentSearch = this.fetchCurrentSearch.bind(this);
    }
    fetchCurrentSearch() {
        this.props.fetch(this.props.search);
    }
    render() {  return (
        <SearchComp 
            search={this.props.search}
            fetching={this.props.fetching}
            changeSearch={this.props.changeSearch}
            handleClick={this.fetchCurrentSearch}
            handleKeyPress={e => e.keyCode === 13 ? this.fetchCurrentSearch() : null}
        /> );
    }
};

const mapStateToProps = state => {
    return {
        search: state.search,
        fetching: state.fetching
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: e => dispatch(changeSearch(e.target.value)),
        fetch: search => dispatch(fetch(search))
    }
};

Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export { Search };
