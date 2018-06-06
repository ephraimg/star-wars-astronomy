
import axios from 'axios';
import { sort } from '../Main/actions';


export function changeSearch(search) {
    return { 
        type: 'SEARCH_CHANGE',
        search
    };
};

const baseAPI = 'https://swapi.co/api/planets/';

export function fetch(search, page = 1) {
    return function(dispatch, getState) {
        dispatch({
            type: 'PREV_SEARCH_SET',
            search
        });
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
