
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Nav } from './Nav';

it('renders a button and input field', () => {
  const nav = shallow(<Nav />);
  expect(nav.find(<div className="nav-opt" />)).to.exist;
});

it('calls fetchPage on nav-opt click (when count and page defined)', () => {
    const fetchPageFake = sinon.spy();
    const wrapper = shallow(<Nav fetchPage={fetchPageFake} count={61} page={5} />);
    wrapper.find('.nav-opt').first().simulate('click');
    expect(fetchPageFake).to.have.property('callCount', 1);
});
