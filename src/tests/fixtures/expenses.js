import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Watter bill',
    note: '',
    amount: 199,
    createdAt: moment(0),
  },
  {
    id: '2',
    description: 'Bank accounts',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(4, 'days'),
  },
  {
    id: '3',
    description: 'Gas bill',
    note: '',
    amount: 325.0,
    createdAt: moment(0).add(4, 'days'),
  },
];
