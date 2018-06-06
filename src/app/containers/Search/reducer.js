
import { combineReducers } from 'redux';


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



const initialSearchTextState = '';
export const searchText = (state, action) => {

    if (typeof state === 'undefined') {
        return initialSearchTextState;
    }

    if (action.type === 'SEARCH_CHANGE') {
        return action.search;
    }

    if (action.type === 'FETCH') {
        return '';
    }

    return state;
};

const initialPrevSearchState = '';
export const prevSearch = (state, action) => {

    if (typeof state === 'undefined') {
        return initialPrevSearchState;
    }

    if (action.type === 'PREV_SEARCH_SET') {
        return action.search;
    }

    return state;
};

const initialPageState = 1;
export const page = (state, action) => {
    if (typeof state === 'undefined') {

        return initialPageState;
    }

    if (action.type === 'FETCH_SUCCESS') {
        return action.page;
    }

    return state;
};



export const search = combineReducers({
    fetching,
    searchText,
    prevSearch,
    page
});

