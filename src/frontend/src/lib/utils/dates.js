import moment from 'moment';

const groupBy = require('lodash.groupby');


export const getShortToday = () => {
  const today = new Date();
  const monthRaw = today.getMonth() + 1;
  const month = monthRaw < 10 ? `0${monthRaw}` : monthRaw;
  return `${today.getFullYear()}-${month}-${today.getDate()}`;
};

export const reverseDate = (date) => {
  return date
    .split('-')
    .reverse()
    .join('-');
};

export const reverseMonthDay = (date) => {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  return `${year}-${day}-${month}`;
};

export const addDays = (startDate, days) => {
  const currentDate = moment(startDate);
  const future = moment(currentDate).add(days, 'days').calendar();
  return reverseMonthDay(reverseDate(future.replace(/\//g, '-')));
};

export const getMonthName = (num) => {
  return [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Oct',
    'Nov',
    'Dec',
  ][parseInt(num, 10)];
};


export const groupByDate = (list, range) => {
  const listWithDateType = list.map((item) => {
    return {
      ...item,
      year: item.Date.split('/')[2],
      quarter: Math.floor(parseInt(item.Date.split('/')[1], 10) / 3),
      month: item.Date.split('/')[1],
    };
  });

  return groupBy(listWithDateType, `${range}`);
};
