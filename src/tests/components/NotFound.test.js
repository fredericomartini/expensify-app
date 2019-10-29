import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('should RENDER DASHBOARD', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
