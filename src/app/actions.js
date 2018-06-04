
import axios from 'axios';


export function changeSearch(search) {
    return { 
        type: 'SEARCH_CHANGE',
        search
    };
}

///////////////////////////////////
// API actions

export function fetch(search) {
    return function(dispatch) {
        dispatch({ 
            type: 'FETCH'
        });
        return axios.get(search).then(
            res => dispatch(fetchSuccess(res.data[0])),
            err => dispatch(fetchFail(err))
        );
    };
}

export function fetchSuccess(results) {
    return function(dispatch) {
        dispatch({ 
            type: 'FETCH_SUCCESS'
        });
        dispatch({ 
            type: 'RESULTS_SET',
            results
        });
    };
}

export function fetchFail(err) {
    return { 
        type: 'FETCH_FAIL',
        err
    };
}
