
import React from 'react';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { DumbMain } from './Main';
import { planets, sorted } from './reducer';
import { sort, setSort } from './actions';


describe('The Main container', () => {

    it('should render DataTable and Nav', () => {
        const props = { 
            prevSearch: '', 
            planets: {}, 
            page: 3, 
            fetch: ()=>{},
            handleSort: ()=>{}
        };
        // DumbMain is unconnected Main
        const main = shallow(<DumbMain {...props} />);
        expect(main.find('DataTable').length).to.equal(1);
        expect(main.find('Nav').length).to.equal(1);
    });
    
});

describe('The sorted reducer', () => {

    it('should change sorted.field on a SORTED_SET action with new field', () => {
        expect(sorted({field: null, order: 'asc'}, {
            type: 'SORTED_SET',
            field: 'population'
        }).field).to.equal('population');
        expect(sorted({field: 'diameter', order: 'desc'}, {
            type: 'SORTED_SET',
            field: 'name'
        }).field).to.equal('name');
    });

    it('should\'t change sorted.field on a SORTED_SET action with same field', () => {
        expect(sorted({field: 'population', order: 'asc'}, {
            type: 'SORTED_SET',
            field: 'population'
        }).field).to.equal('population');
        expect(sorted({field: '', order: 'desc'}, {
            type: 'SORTED_SET',
            field: ''
        }).field).to.equal('');
    });

    it('should swap asc/desc on a SORTED_SET action with same field', () => {
        expect(sorted({field: 'population', order: 'asc'}, {
            type: 'SORTED_SET',
            field: 'population'
        }).order).to.equal('desc');
        expect(sorted({field: 'diameter', order: 'desc'}, {
            type: 'SORTED_SET',
            field: 'diameter'
        }).order).to.equal('asc');
    });

    it('shouldn\'t swap asc/desc on a SORTED_SET action with new field', () => {
        expect(sorted({field: 'population', order: 'asc'}, {
            type: 'SORTED_SET',
            field: 'diameter'
        }).order).to.equal('asc');
        expect(sorted({field: 'name', order: 'desc'}, {
            type: 'SORTED_SET',
            field: 'population'
        }).order).to.equal('desc');
    });

});

describe('The planets reducer', () => {

    it('should return action.planets on a PLANETS_SET action', () => {
        expect(planets({ count: 1, results: [{ name: 'Tatooine' }] }, {
            type: 'PLANETS_SET',
            planets: { count: 2, results: [{ name: 'Alderaan' }, { name: 'Dagobah' }] }
        })).to.eql({ count: 2, results: [{ name: 'Alderaan' }, { name: 'Dagobah' }] });
    });

    it('should sort by field and order on a PLANETS_SET action', () => {
        const initial = { 
            count: 3, 
            results: [
                { name: 'Alderaan', population: 12312341 }, 
                { name: 'Dagobah', population: 1 },
                { name: 'Endor', population: 98324}
            ] 
        };
        const expNameDesc = { 
            count: 3, 
            results: [
                { name: 'Endor', population: 98324},
                { name: 'Dagobah', population: 1 },
                { name: 'Alderaan', population: 12312341 } 
            ] 
        };
        const expNameAsc = { 
            count: 3, 
            results: [
                { name: 'Alderaan', population: 12312341 }, 
                { name: 'Dagobah', population: 1 },
                { name: 'Endor', population: 98324}
            ] 
        };
        const expPopAsc = { 
            count: 3, 
            results: [
                { name: 'Dagobah', population: 1 },
                { name: 'Endor', population: 98324},
                { name: 'Alderaan', population: 12312341 } 
            ] 
        };
        const expPopDesc = { 
            count: 3, 
            results: [
                { name: 'Alderaan', population: 12312341 }, 
                { name: 'Endor', population: 98324},
                { name: 'Dagobah', population: 1 }
            ] 
        };
        expect(planets(initial, {
            type: 'PLANETS_SORT',
            sorted: { field: 'population', order: 'asc' }
        })).to.eql(expPopAsc);
        expect(planets(initial, {
            type: 'PLANETS_SORT',
            sorted: { field: 'population', order: 'desc' }
        })).to.eql(expPopDesc);
        expect(planets(initial, {
            type: 'PLANETS_SORT',
            sorted: { field: 'name', order: 'asc' }
        })).to.eql(expNameAsc);
        expect(planets(initial, {
            type: 'PLANETS_SORT',
            sorted: { field: 'name', order: 'desc' }
        })).to.eql(expNameDesc);
    });

});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('The sort action', () => {

    it('should get state.sorted and return a PLANETS_SORT action', () => {
        const expectedActions = [
          { type: 'PLANETS_SORT', sorted: { field: 'name', order: 'asc' } }
        ];
        const store = mockStore({ sorted: { field: 'name', order: 'asc' } });
        store.dispatch(sort());
        expect(store.getActions()).to.eql(expectedActions);
    })

});

describe('The setSort action', () => {

    it('should return a SORTED_SET action with argument as action.field', () => {
        expect(setSort('population')).to.eql({
            type: 'SORTED_SET',
            field: 'population'
        })
    });

});
