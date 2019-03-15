import calculators from '../../../../lib/utils/calculators';
import { graphColors } from '../../../../lib/utils';

/**
 * @example data structure for single grouped bar graph
 *
[
  {
    "month": "Mar",
    "income": 9000,
    "incomeColor": "rgb(75,106,219)",
  },
  ...
]
 */

export default ({ transactions, rangeType }) => {
  /**
   * @example
      {
        Mar: { incomeTransactions: [ [Object] ], total: 9000 },
        Apr: { incomeTransactions: [ [Object] ], total: 1000 },
        May: { incomeTransactions: [ [Object] ], total: 5000 },
        Jun: { incomeTransactions: [ [Object] ], total: 900 },
        total: 15900
      }
   */
  const income = calculators.calculateTotalIncome(transactions, rangeType);
  const keys = Object.keys(income)
  const timeKeys = keys.splice(0, keys.length - 1);

  return timeKeys
    .map((key, i) => {
      return {
        [`${rangeType}`]: key,
        income: income[key].total,
        incomeColor: graphColors[i],
      }
    })
};
