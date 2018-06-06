
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Search } from './Search';

it('renders a button and input field', () => {
  const search = shallow(<Search />);
  expect(search.find('button')).to.have.length(1);
  expect(search.find('input')).to.have.length(1);
});

it('renders a Spinner if prop fetching === true', () => {
  const search1 = shallow(<Search fetching={true}/>);
  expect(search1.find('Spinner')).to.have.length(1);
});

it('doesn\'t render a Spinner if prop fetching !== true', () => {
  const search1 = shallow(<Search fetching={false}/>);
  expect(search1.find('Spinner')).to.have.length(0);
});
