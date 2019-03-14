import highLevelOverviewBar from '../highLevelOverviewBar';
import transactions from '../../../../../lib/mocks/transactions.json';


/**
 * @example data structure for single grouped bar graph
 *
[
  {
    "dataRange": "2018-2019",
    "income": 132,
    "incomeColor": "hsl(352, 70%, 50%)",
    "corporationTax": 178,
    "corporationTaxColor": "hsl(186, 70%, 50%)",
    "expenses": 141,
    "expensesColor": "hsl(266, 70%, 50%)",
    "dividend": 105,
    "dividendColor": "hsl(172, 70%, 50%)",
    "surplus": 112,
    "surplusColor": "hsl(355, 70%, 50%)",
  }
]
 */

describe('highLevelOverviewBar', () => {
  const data = highLevelOverviewBar({
    transactions,
    taxYear: '2018-2019',
  });

  it('should return an array', () => {
    const isArray = data.constructor === Array;
    expect(isArray).toBeTruthy();
  });

  it('should return a non empty array', () => {
    expect(data.length > 0).toBeTruthy();
  });

  it('should return array of objects', () => {
    data.forEach((datapoint) => {
      const isObject = datapoint.constructor === Object;
      expect(isObject).toBeTruthy();
    });
  });
});
