import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/Expense';
import expenses from '../fixtures/expenses';

test('should RENDER ONE EXPENSE', () => {
  const wrapper = shallow(<Expense expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
