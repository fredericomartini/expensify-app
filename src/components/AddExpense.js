import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
  <div>
    <h3>This is the add expense</h3>
    Description:
    {' '}
    <input name="description" type="text" />
    Amount:
    {' '}
    <input name="amount" type="text" />
    <button
      type="submit"
      onClick={(e) => {
        console.log(props);
        // props.dispatch(addExpense())
      }}
    >
      Save Expense
    </button>
  </div>
);

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(AddExpense);
