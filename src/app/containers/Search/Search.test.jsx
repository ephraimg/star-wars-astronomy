// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { fetch } from './actions';
import { expect } from 'chai';
import { fetching, searchText, prevSearch, page } from './reducer';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('Fetch async action', () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   })
//   it('should create FETCH_SUCCESS when fetching has been done', () => {
//     fetchMock.getOnce('/fakeAPIurl');
//     const expectedActions = [
//       { type: 'FETCH' },
//       { type: 'PREV_SEARCH_SET' },
//       { type: 'FETCH_SUCCESS', page: 1 },
//       { type: 'PLANETS_SET', planets: {} }
//     ];
//     const store = mockStore({ page: null, planets: {} });
//     return store.dispatch(fetch('Tatooine', 1)).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   })
// });

describe('The fetching reducer', () => {

    it('should return true for a FETCH action', () => {
        expect(fetching(false, {
            type: 'FETCH'
        })).to.equal(true);
        expect(fetching(true, {
            type: 'FETCH'
        })).to.equal(true);
    })

    it('should return false for a FETCH_SUCCESS action', () => {
        expect(fetching(true, {
            type: 'FETCH_SUCCESS'
        })).to.equal(false);
        expect(fetching(false, {
            type: 'FETCH_SUCCESS'
        })).to.equal(false);
    })

    it('should return false for a FETCH_FAIL action', () => {
        expect(fetching(true, {
            type: 'FETCH_FAIL'
        })).to.equal(false);
        expect(fetching(false, {
            type: 'FETCH_FAIL'
        })).to.equal(false);
    })

});

describe('The searchText reducer', () => {

    it('should return an empty string on a FETCH action', () => {
        expect(searchText('Tatooine', {
            type: 'FETCH'
        })).to.equal('');
        expect(searchText('', {
            type: 'FETCH_FAIL'
        })).to.equal('');
    });

    it('should return action.search string on a SEARCH_CHANGE action', () => {
        expect(searchText('Tatooine', {
            type: 'SEARCH_CHANGE',
            search: 'Dagobah'
        })).to.equal('Dagobah');
        expect(searchText('Alderaan', {
            type: 'SEARCH_CHANGE',
            search: ''
        })).to.equal('');
    });

});

describe('The prevSearch reducer', () => {

    it('should return action.search string on a PREV_SEARCH_SET action', () => {
        expect(prevSearch('Tatooine', {
            type: 'PREV_SEARCH_SET',
            search: 'Dagobah'
        })).to.equal('Dagobah');
        expect(prevSearch('Alderaan', {
            type: 'PREV_SEARCH_SET',
            search: ''
        })).to.equal('');
    });

});

describe('The page reducer', () => {

    it('should return action.page number on a FETCH_SUCCESS action', () => {
        expect(page(null, {
            type: 'FETCH_SUCCESS',
            page: 3
        })).to.equal(3);
        expect(page(3, {
            type: 'FETCH_SUCCESS',
            page: 1
        })).to.equal(1);
    });

});

