
import { combineReducers } from 'redux';

// import { search } from './';
// import { results } from './';
// import { page } from './';

const initialFetchingState = false;
export const fetching = (state, action) => {

    if (typeof state === 'undefined') {
        return initialFetchingState;
    }

    if (action.type === 'FETCH') {
        return true;
    }

    if (action.type === 'FETCH_FAIL' || action.type === 'FETCH_SUCCESS') {
        return false;
    }

    return state;
};

const initialSearchState = '';
export const search = (state, action) => {

    if (typeof state === 'undefined') {
        return initialSearchState;
    }

    if (action.type === 'SEARCH_CHANGE') {
        return action.search;
    }

    if (action.type === 'FETCH') {
        return '';
    }

    return state;
};


const initialFilmsState = {};
export const films = (state, action) => {

    if (typeof state === 'undefined') {
        return initialFilmsState;
    }

    if (action.type === 'FILMS_SET') {
        return action.films;
    }

    return state;
};

import { sampleData2 } from './sampleData';
const initialPlanetsState = sampleData2;
export const planets = (state, action) => {

    if (typeof state === 'undefined') {
        return initialPlanetsState;
    }

    if (action.type === 'PLANETS_SET') {
        return action.planets;
    }

    if (action.type === 'PLANETS_SORT') {
        const compareAlph = (a, b) => {
            if (a[action.field] < b[action.field]) { return -1; }
            if (a[action.field] > b[action.field]) { return 1; }
            return 0;            
        };
        const compareNum = (a, b) => {
            return (+a[action.field] || 0) - (+b[action.field] || 0);
        }
        let compare;
        if (action.field === 'name') { 
            compare = compareAlph; 
        } else {
            compare = compareNum;
        }
        const ordered = action.sorted.order === 'asc'
            ? [...state.results].sort((a, b) => compare(a, b)) 
            : [...state.results].sort((a, b) => compare(b, a));
        return Object.assign({}, state, { results: ordered });
    }

    return state;
};

const initialPageState = 1;
export const page = (state, action) => {
    if (typeof state === 'undefined') {

        return initialPageState;
    }

    if (action.type === 'PAGE_CHANGE') {
        return action.page;
    }

    return state;
};


const initialSortedState = { field: null, order: 'desc' };
export const sorted = (state, action) => {

    if (typeof state === 'undefined') {
        return initialSortedState;
    }

    if (action.type === 'SORTED_SET') {
        const flip = { 'asc': 'desc', 'desc': 'asc' };
        const newOrder = state.field === action.field 
            ? flip[state.order] 
            : state.order;
        return {
            field: action.field,
            order: newOrder
        };
    }

    return state;
};

export const reducer = combineReducers({
    fetching,
    sorted,
    search,
    films,
    planets,
    page
});

