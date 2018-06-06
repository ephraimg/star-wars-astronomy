
import { combineReducers } from 'redux';
import { films } from './containers/App/reducer';
import { search } from './containers/Search/reducer';
import { planets, sorted } from './containers/Main/reducer';

export const reducer = combineReducers({
    films,
    search,
    planets,
    sorted
});

