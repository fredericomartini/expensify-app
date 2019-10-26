import moment from 'moment';

// Visible Expenses
export default (expenses, {
  text, sortBy, startDate, endDate,
}) => expenses
  .filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) => {
    if (sortBy === 'date') {
      return moment(a.createdAt).isBefore(moment(b.createdAt)) || -1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount || -1;
    }
    return [b, a];
  });
