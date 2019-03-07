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


/**
 * @param {*} num
 * @returns {}
 */
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


/**
 * @param {*} dateObj
 * @returns {}
 */
export const changeKeysFromNumbersToMonthNames = (dateObj) => {
  const numKeys = Object.keys(dateObj);
  const newObj = {};

  numKeys.forEach((key, index) => {
    const monthName = getMonthName(key);
    newObj[monthName] = dateObj[numKeys[index]];
  });

  return newObj;
};


/**
 * @param {*} list
 * @param {*} range
 * @param {*} keyType
 * @returns {}
 */
export const groupByDate = (list, range, keyType = 'number') => {
  const listWithDateType = list.map((item) => {
    return {
      ...item,
      year: item.Date.split('/')[2],
      quarter: Math.floor(parseInt(item.Date.split('/')[1], 10) / 3),
      month: item.Date.split('/')[1],
    };
  });

  const grouped = groupBy(listWithDateType, `${range}`);

  if (keyType === 'name' && range === 'month') {
    return changeKeysFromNumbersToMonthNames(grouped);
  }

  return grouped;
};
