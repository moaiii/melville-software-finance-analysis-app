import moment from 'moment';

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
