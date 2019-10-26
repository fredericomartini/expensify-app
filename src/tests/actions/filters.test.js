import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
} from '../../actions/filters';

test('should setup SET TEXT FILTER object', () => {
  const text = 'My Text Filter';
  const filter = setTextFilter(text);
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should setup SET TEXT FILTER object with default', () => {
  const filter = setTextFilter();
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should setup SORT BY DATE object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should setup SORT BY AMOUNT object', () => {
  const filter = sortByAmount();
  expect(filter).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('should setup SET START DATE object', () => {
  const filter = setStartDate(moment(0));
  expect(filter).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should setup SET END DATE object', () => {
  const filter = setEndDate(moment(0));
  expect(filter).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});
