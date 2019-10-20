import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import expensesSelector from '../selectors/expenses';
import ExpenseFilter from './ExpenseFilter';
import { sortByAmount, sortByDate } from '../actions/filters';

const ExpenseList = (props) => (
  <div>
    <h1>Expenses List</h1>
    <ExpenseFilter />
    <h3>
      SortBy:
      <select
        value={props.sortBy || 'date'}
        defaultValue="date"
        onChange={({ target: { value } }) => {
          switch (value) {
            case 'amount':
              return props.dispatch(sortByAmount());
            default:
              return props.dispatch(sortByDate());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </h3>
    {props.expenses && props.expenses.length !== 0 ? (
      props.expenses.map((expense) => <Expense key={expense.id} {...expense} />)
    ) : (
      <p> No expenses</p>
    )}
  </div>
);

// Maps estado do store para componente props
const mapStateToProps = (state) => ({
  expenses: expensesSelector(state.expenses, state.filters),
  sortBy: state.filters.sortBy,
});

export default connect(mapStateToProps)(ExpenseList);
