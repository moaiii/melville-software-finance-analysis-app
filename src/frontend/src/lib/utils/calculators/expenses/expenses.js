const groupBy = require('lodash.groupby');


/**
 * @param {Array<Object>} transactions .
 * @returns {Object<Array>} expensesByCategory .
 */
const groupExpensesByCategory = (transactions) => {
  const nonIncomeTransactions = transactions
    .filter(transaction => parseInt(transaction.in, 10) === 0);

  return groupBy(nonIncomeTransactions, 'Category');
};


/**
 * @param {Object<Array>} expensesByCategory .
 * @returns {Object<number>} .
 */
const totalExpensesByCategory = (expensesByCategory) => {
  const newObj = {};

  const _categories = Object
    .keys(expensesByCategory);

  const totals = _categories
    .map((category) => {
      return expensesByCategory[category]
        .reduce((acc, cur) => acc + cur.out, 0);
    });

  _categories.forEach((category, index) => {
    newObj[category] = totals[index];
  });

  return newObj;
};


/**
 * @param {Array<Object>} transactions .
 * @returns {number} final expense amount
 */
const totalAllExpenses = (transactions) => {
  const expensesByCategory = groupExpensesByCategory(transactions);
  const totals = totalExpensesByCategory(expensesByCategory);

  const finalExpenseAmount = Object
    .values(totals)
    .reduce((acc, cur) => acc + cur, 0);

  return finalExpenseAmount;
};

export {
  groupExpensesByCategory,
  totalExpensesByCategory,
  totalAllExpenses,
};
