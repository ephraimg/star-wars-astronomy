
import React from 'react';
import { createStore } from 'redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { DumbApp } from './App';

describe('The App container', () => {

    it('should render Banner and connected Search and Main', () => {
        const fetchFilmsFake = sinon.spy();
        // Dumb app is pre-connected App
        const app = shallow(<DumbApp fetchFilms={fetchFilmsFake} />);
        expect(app.find('Banner').length).to.equal(1);
        // Search is connected DumbSearch
        expect(app.find('Connect(DumbSearch)').length).to.equal(1);
        // Main is connected DumbMain
        expect(app.find('Connect(DumbMain)').length).to.equal(1);
    });

    it('should call fetchFilms on mount', () => {
        const fetchFilmsFake = sinon.spy();
        // Dumb app is pre-connected App
        const app = shallow(<DumbApp fetchFilms={fetchFilmsFake} />);
        expect(fetchFilmsFake).to.have.property('callCount', 1);
    });
    
});