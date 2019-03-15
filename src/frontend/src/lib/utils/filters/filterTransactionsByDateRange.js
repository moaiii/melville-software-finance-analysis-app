const sortBy = require('lodash.sortby');

/**
 * @param {string} dateString @example "15/02/2019"
 * @returns {number} @example 15022019
 */
const dateStringToNumber = dateString => {
  if (dateString.constructor !== String) {
    throw new Error(
      'date string supplied to dateStringToNumber() is not a string!'
    )
  }

  const badCharsRemoved = dateString
    .replace(/\//g, '')
    .replace(/\-/g, '');

  const castToNumber = parseInt(badCharsRemoved, 10);

  if (!castToNumber) {
    throw new Error(
      'date string supplied to dateStringToNumber() cannot be parsed to number!'
    );
  }

  return castToNumber;
}


/**
 * @param {string} dateNumber @example 15022019
 * @param {string} seperator @example "/" or "-"
 * @returns {number} @example "15/02/2019"
 */
const dateNumberToString = (dateNumber, seperator) => {
  if (dateNumber.constructor !== Number) {
    throw new Error(
      'date number supplied to dateNumberToString() is not a number!'
    )
  }

  return dateNumber.toString().slice(0, 2)
    + seperator
    + dateNumber.toString().slice(2, 4)
    + seperator
    + dateNumber.toString().slice(4);
}


/**
 * @param {Array<string>} dateRange @example ["15/02/2019", "11/02/2019"]
 * @returns {Object<number>} @example {max: 15022019, min: 11022019}
 */
const getMaxMinOfDatesArray = (dateRange) => {
  if (dateRange.constructor !== Array) {
    throw new Error(
      'dateRange passed to getMaxMinOfDatesArray is well.. not.. its not an array!'
    );
  }

  if (dateRange.length !== 2) {
    throw new Error(
      `invalid date range supplied, ${dateRange.length} suppled. Function needs 2 date strings`
    )
  }

  const dateRangeToNumbers = dateRange
    .map(date => dateStringToNumber(date));

  return {
    max: Math.max(dateRangeToNumbers[0], dateRangeToNumbers[1]),
    min: Math.min(dateRangeToNumbers[0], dateRangeToNumbers[1]),
  }
}


/**
 * @param {Array<Object>} transactions .
 * @param {Array<string>} dateRange @example ["15/02/2019", "11/02/2019"]
 * @returns {Array<Object>} filtered transactions list
 */
const filterTransactionsByDateRange = (transactions, dateRange) => {
  const {min, max} = getMaxMinOfDatesArray(dateRange);

  const transactionsFiltered = transactions
    /** cast dates to number */
    .map(transaction => {
      return {
        ...transaction,
        'Date': dateStringToNumber(transaction['Date'])
      }
    })
    /** filter out by range */
    .filter((transaction) => {
      return transaction['Date'] >= min && transaction['Date'] <= max;
    });

  const transactionsSorted = sortBy(transactionsFiltered, 'Date').reverse();

  /** revert the dates back from number to normal format */
  return transactionsSorted
    .map(transaction => {
      return {
        ...transaction,
        'Date': dateNumberToString(transaction['Date'], '/')
      }
    });
}


export {
  dateStringToNumber,
  getMaxMinOfDatesArray,
  filterTransactionsByDateRange,
};
