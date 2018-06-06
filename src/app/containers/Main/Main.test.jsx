
import React from 'react';
import { createStore } from 'redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { DumbMain } from './Main';

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
