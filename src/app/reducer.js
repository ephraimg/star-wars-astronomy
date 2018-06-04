
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

    return state;
};

import { sampleData2 } from './sampleData';
const initialResultsState = sampleData2;
export const results = (state, action) => {

    if (typeof state === 'undefined') {
        return initialResultsState;
    }

    if (action.type === 'RESULTS_SET') {
        return action.results;
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


export const reducer = combineReducers({
    fetching,
    search,
    results,
    page
});

