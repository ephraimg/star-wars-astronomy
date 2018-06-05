
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

const initialPlanetsState = {
    count: 1, 
    results: [{
        name: "Hoth", population: "unknown", diameter: "7200",
        rotation_period: 23, orbital_period: 549,
        terrain: "Tundra, Ice caves, Mountain ranges",
        films: ["The Empire Strikes Back"]
    }]
};
export const planets = (state, action) => {

    if (typeof state === 'undefined') {
        return initialPlanetsState;
    }

    if (action.type === 'PLANETS_SET') {
        return action.planets;
    }

    if (action.type === 'PLANETS_SORT') {
        const field = action.sorted.field;
        const compareAlph = (a, b) => {
            if (a[field] < b[field]) { return -1; }
            if (a[field] > b[field]) { return 1; }
            return 0;            
        };
        const compareNum = (a, b) => {
            return (+a[field] || 0) - (+b[field] || 0);
        }
        const compare = field === 'name'
            ? compareAlph : compareNum;
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

    if (action.type === 'FETCH_SUCCESS') {
        return action.page;
    }

    return state;
};


const initialSortedState = { field: null, order: 'asc' };
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

export const search = combineReducers({
    fetching,
    searchText,
    prevSearch,
    page
});

export const reducer = combineReducers({
    search,
    planets,
    films,
    sorted
});

