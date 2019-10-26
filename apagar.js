const moment = require('moment');

console.log(moment().startOf('month'));
console.log(
  moment()
    .endOf('M')
    .valueOf(),
);

console.log(moment('2019-04-26'));
