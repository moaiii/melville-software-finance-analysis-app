import { reverseDate } from '../../../../lib/utils/dates';

/**
 * @example data structure needed for the calendar
 *
  [
    {
      "day": "2016-01-21",
      "value": 241
    },
    {
      "day": "2015-04-23",
      "value": 194
    },
    {
      "day": "2016-04-12",
      "value": 292
    },
    ....
  ]
 */

 /**
  * @param {Array<Object>} transactions .
  * @returns {Array<Object>} @example { day: '2019-02-15', value: 28635.24 }, { day: '2019-02-13', value: 21332.34 } }
  */
export default (transactions) => {
  const datapoints = transactions
    .map(t => {
      if (!t.hasOwnProperty('Balance')) {
        throw new Error(
          `transaction does not have a balance property. ${t.Reference}`
        );
      }

      if (!t.hasOwnProperty('Date')) {
        throw new Error(
          `transaction does not have a date property. ${t.Reference}`
        );
      }

      const americanizeDateString = reverseDate(t['Date'], '/')
        .replace(/\//g, '-');

      return {
        day: americanizeDateString,
        value: parseFloat(t['Balance']),
      }
    })

  return datapoints;
};