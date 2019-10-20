import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const Expense = ({
  dispatch, id, description, amount, createdAt,
}) => (
  <div>
    <h3>{description}</h3>
    <p>
      Amount:
      {' '}
      {amount}
      {' '}
createdAt:
      {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(Expense);
