import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should SETUP ARRAY TO DEFAULT STATE', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should ADD EXPENSE', () => {
  const expense = { description: 'water bill', note: 'My expense', amount: 33.44 };
  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    expense,
  });

  expect(state).toEqual([...expenses, expense]);
});

test('should REMOVE EXPENSE', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  });

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT REMOVE EXPENSES IF ID NOT FOUND', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: -33,
  });

  expect(state).toEqual(expenses);
});

test('should EDIT EXPENSE', () => {
  const updates = {
    description: 'Was gas bill',
    note: 'With note',
    amount: 333.44,
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates,
  });

  expect(state).toEqual([expenses[0], expenses[1], { ...expenses[2], ...updates }]);
});

test('should NOT EDIT EXPENSE IF ID NOT FOUND', () => {
  const updates = {
    description: '',
    note: 'MY NOTE',
    amount: 333,
  };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '33',
    updates,
  });

  expect(state).toEqual(expenses);
});
