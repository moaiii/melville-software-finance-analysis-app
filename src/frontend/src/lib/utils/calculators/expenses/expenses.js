const groupBy = require('lodash.groupby');
const {expensesEnum, earningsEnum} = require('../../enums');

/**
 * @param {Array<Object>} transactions .
 * @returns {Object<Array>} expensesByCategory .
 */
const groupExpensesByCategory = (transactions) => {
  const nonExpensableCategories = [
    earningsEnum.DIVIDEND
  ]
  const nonIncomeTransactions = transactions
    .filter(transaction => parseInt(transaction.in, 10) === 0)
    .filter(transaction => !nonExpensableCategories
      .includes(transaction.category));

  return groupBy(nonIncomeTransactions, expensesEnum.CATEGORY);
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
        .reduce((acc, cur) => acc + parseFloat(cur.out), 0);
    });

  _categories.forEach((category, index) => {
    newObj[category] = Math.ceil(totals[index]);
  });

  return newObj;
};


/**
 * @param {Array<Object>} transactions .
 * @returns {number} final expense amount
 */
const calculateTotalExpenses = (transactions) => {
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
  calculateTotalExpenses,
};
