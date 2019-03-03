import store from '../../../../db/store';
import {
  groupByDate,
  graphColors,
  getMonthName,
} from '../../../../lib/utils';


export default (range) => {
  const transactions = store.getState().TransactionListReducer.transactions.api;
  const transactionsGroupedByMonth = groupByDate(transactions, range);
  const keys = ['in', 'out'];

  const data = Object
    .entries(transactionsGroupedByMonth)
    .map((group, i) => { // eslint-disable-line
      return {
        [`${range}`]: getMonthName(group[0]),
        in: Math.floor(group[1]
          .reduce((acc, cur) => acc + parseFloat(cur.in), 0)),
        inColor: graphColors[5],
        out: Math.floor(group[1]
          .reduce((acc, cur) => acc + parseFloat(cur.out), 0)),
        outColor: graphColors[1],
      };
    });

  return { data, keys };
};
