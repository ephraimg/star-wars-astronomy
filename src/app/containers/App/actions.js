
import axios from 'axios';
import { fetchFail } from '../Search/actions';

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
