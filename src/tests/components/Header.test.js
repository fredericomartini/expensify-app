import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should RENDER HEADER CORRECTLY', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
