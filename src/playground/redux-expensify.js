import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'askdlfjasdklfja',
      description: 'Januaray Rent',
      note: 'This was the finaaaaal payment for that address',
      amount: 54500,
      created_at: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
