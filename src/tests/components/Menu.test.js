import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../components/Menu';

test('should RENDER MENU CORRECTLY', () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper).toMatchSnapshot();
});
