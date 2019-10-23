import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        // add data to redux store
        props.dispatch(addExpense(expense));
        // use history push method to switch pages
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpense);
