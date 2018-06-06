
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Search } from './Search';

it('renders a button and input field', () => {

  const search = shallow(<Search />);

  expect(search.find('button')).to.have.length(1);
  expect(search.find('input')).to.have.length(1);

});