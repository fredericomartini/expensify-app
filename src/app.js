import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import 'normalize-css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'Conta de água',
    amount: 35,
    createdAt: 1000,
  }),
);
store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Conta de gas',
    amount: 25,
    createdAt: 1250,
  }),
);

store.dispatch(
  addExpense({
    description: 'Phone bill',
    amount: 95,
  }),
);

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
//   store.dispatch(sortByAmount());
// }, 3000);
// store.dispatch(setStartDate(-1000));
// store.dispatch(setEndDate(1300));
// store.dispatch(sortByAmount());
// const state = store.getState();
// const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

// Provider, "provê" o compartilhamento de store para todos os componentes
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
