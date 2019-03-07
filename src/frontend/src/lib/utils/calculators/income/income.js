import { groupByDate } from '../../dates';


/**
 * @param {Array<Object>} transactions
 * @param {string} rangeType
 * @returns {Array<Object>}
 */
const getIncome = (transactions, rangeType = 'month') => {
  /** @type {Array<Object>} */
  const incomeTransactions = transactions
    .filter(transaction => transaction.category === 'Income'
      && parseInt(transaction.in, 10) > 0);

  /** @type {Array<string: Object>} */
  const transactionsGroupedByMonth = groupByDate(incomeTransactions, rangeType, 'name');

  /** @type {Array<string>} */
  const dateKeys = Object
    .keys(transactionsGroupedByMonth); // month or just number

  /** @type {Array<Object>} */
  const incomeTransactionsArray = Object
    .values(transactionsGroupedByMonth);

  /** @type {Array<number>} */
  const totalsByRange = incomeTransactionsArray
    .map((transactionGroup) => {
      return transactionGroup
        .reduce((acc, cur) => acc + parseInt(cur.in, 10), 0);
    });

  /** @type {Object} finalObject.incomeTransactions */
  /** @type {number} finalObject.total */
  const finalObject = {};

  dateKeys.forEach((key, index) => {
    finalObject[key] = {
      incomeTransactions: incomeTransactionsArray[index],
      total: totalsByRange[index],
    };
  });

  return finalObject;
};

export default getIncome;
