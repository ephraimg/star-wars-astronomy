
import React from 'react';
import { connect } from 'react-redux';

import { Search as SearchComp } from '../components/Search';
import { changeSearch } from '../actions';

let Search = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {  return (
        <SearchComp 
            search={this.props.search}
            changeSearch={this.props.changeSearch}
        /> );
    }
};

const mapStateToProps = state => {
    return {
        search: state.search
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: e => dispatch(changeSearch(e.target.value))
    }
};

Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export { Search };
