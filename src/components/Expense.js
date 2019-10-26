import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ expense }) => (
  <div>
    <Link to={`/edit/${expense.id}`}>
      <h3>{expense.description}</h3>
    </Link>
    <p>
      Amount:
      {' '}
      {expense.amount}
      {' '}
createdAt:
      {expense.createdAt && moment(expense.createdAt).format('DD/MM/YYYY')}
    </p>
  </div>
);
