import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should SETUP DEFAULT FILTERS VALUES', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should SORT_BY TO AMOUNT', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should SORT_BY TO DATE', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should SET_TEXT_FILTER', () => {
  const text = 'My text filter';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toBe(text);
});

test('should SET START_DATE FILTER', () => {
  const startDate = moment('2019-04-26');
  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test('should SET END_DATE FILTER', () => {
  const endDate = moment('2019-04-26');
  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
