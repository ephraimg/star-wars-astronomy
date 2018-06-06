
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