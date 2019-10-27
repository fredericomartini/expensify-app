import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should FILTER BY TEXT VALUE', () => {
  const text = 'Bill';
  const filters = {
    text,
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should FILTER BY START DATE', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should FILTER BY END DATE', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should FILTER BY START_DATE and END_DATE', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test('should SORT BY DATE', () => {
  const result = selectExpenses(expenses, { text: '', sortBy: 'date' });
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should SORT BY AMOUNT', () => {
  const result = selectExpenses(expenses, { text: '', sortBy: 'amount' });
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
