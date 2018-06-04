
import axios from 'axios';


export function changeSearch(search) {
    return { 
        type: 'SEARCH_CHANGE',
        search
    };
};

export function sort(field) {
    return function(dispatch, getState) {
        dispatch({ 
            type: 'SORTED_SET',
            field
        });
        const { sorted } = getState();
        dispatch({
            type: 'PLANETS_SORT',
            sorted,
            field
        });
    };
};

///////////////////////////////////
// API actions

const baseAPI = 'https://swapi.co/api/planets/';

export function fetch(search) {
    return function(dispatch) {
        dispatch({ 
            type: 'FETCH'
        });
        const query = baseAPI + '?search=' + search;
        return axios.get(query).then(
            res => dispatch(fetchSuccess(res.data)),
            err => dispatch(fetchFail(err))
        );
    };
}

export function fetchSuccess(planets) {
    return function(dispatch) {
        dispatch({ 
            type: 'FETCH_SUCCESS'
        });
        dispatch({ 
            type: 'PLANETS_SET',
            planets
        });
    };
}

export function fetchFail(err) {
    return { 
        type: 'FETCH_FAIL',
        err
    };
}
