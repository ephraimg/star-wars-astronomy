
export function sort() {
    return function(dispatch, getState) {
        const { sorted } = getState();
        dispatch({
            type: 'PLANETS_SORT',
            sorted
        });
    };
};

export function setSort(field) {
    return { 
        type: 'SORTED_SET',
        field
    };
};

