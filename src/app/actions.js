
import axios from 'axios';


export function changeSearch(search) {
    return { 
        type: 'SEARCH_CHANGE',
        search
    };
};

export function sort(field = 'name') {
    return function(dispatch, getState) {
        const { sorted } = getState();
        dispatch({
            type: 'PLANETS_SORT',
            sorted,
            field
        });
    };
};

export function setSort(field) {
    return { 
        type: 'SORTED_SET',
        field
    };
};

///////////////////////////////////
// API actions

export function fetchFilms() {
    return function(dispatch) {
        return axios.get('https://swapi.co/api/films/').then(
            res => {
                const films = {};
                res.data.results.forEach(film =>
                    films[film.url] = film.title)
                dispatch({
                    type: 'FILMS_SET',
                    films
                });
            },
            err => dispatch(fetchFail(err))
        );
    };
}


const baseAPI = 'https://swapi.co/api/planets/';

export function fetch(search, page = 1) {
    return function(dispatch, getState) {
        dispatch({ 
            type: 'FETCH'
        });
        const { films } = getState();
        const query = `${baseAPI}?search=${search}&page=${page}`;
        return axios.get(query).then(
            res => {
                res.data.results.forEach(planet => {
                    planet.films = planet.films.map(film => films[film]);
                });
                // films.forEach(film => console.log(film));
                dispatch(fetchSuccess(res.data, page));
            },
            err => dispatch(fetchFail(err))
        );
    };
}

export function fetchSuccess(planets, page) {
    return function(dispatch) {
        dispatch({ 
            type: 'FETCH_SUCCESS',
            page
        });
        dispatch({ 
            type: 'PLANETS_SET',
            planets
        });
        dispatch(sort());
    };
}

export function fetchFail(err) {
    return { 
        type: 'FETCH_FAIL',
        err
    };
}
