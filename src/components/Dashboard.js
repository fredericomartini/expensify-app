import React from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Dashboard = () => (
  <div>
    <ExpenseFilter />
    <ExpenseList />
  </div>
);

export default Dashboard;
