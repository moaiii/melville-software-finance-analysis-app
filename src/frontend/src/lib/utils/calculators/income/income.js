import { groupByDate } from '../../dates';

const getIncome = (transactions, rangeType = 'month') => {
  const incomeTransactions = transactions
    .filter(transaction => transaction.category === 'Income'
      && parseInt(transaction.in, 10) > 0);

  const transactionsGroupedByMonth = groupByDate(incomeTransactions, rangeType, 'name');

  const dateKeys = Object.keys(transactionsGroupedByMonth);
  const incomeTransactionsArray = Object.values(transactionsGroupedByMonth);

  const totalsByRange = incomeTransactionsArray
    .map((transactionGroup) => {
      return transactionGroup
        .reduce((acc, cur) => acc + parseInt(cur.in, 10), 0);
    });

  const finalObject = {};

  dateKeys.forEach((key, index) => {
    finalObject[key] = {
      incomeTransactions: incomeTransactionsArray[index],
      total: totalsByRange[index],
    };
  });
  console.log(finalObject);
  return finalObject;
};

export default getIncome;
