import earningsPerPersonPie from '../earningsPerPersonPie';
import transactions from '../../../../../lib/mocks/transactions.json';

/**
 * @example data structure for pie graph
 *
[
  {
    id: 'Christopher - Dividend',
    label: 'Christopher - Dividend',
    value: 15000,
    color: 'hsl(246, 70%, 50%)' },
  { id: 'Christopher - Salary',
    label: 'Christopher - Salary',
    value: 14970,
    color: 'hsl(62, 70%, 50%)' },
  { id: 'Christopher - Pension',
    label: 'Christopher - Pension',
    value: 12000,
    color: 'hsl(295, 70%, 50%)' },
  { id: 'Magdalena - Dividend',
    label: 'Magdalena - Dividend',
    value: 5000,
    color: 'hsl(246, 70%, 50%)' },
  { id: 'Magdalena - Salary',
    label: 'Magdalena - Salary',
    value: 11000,
    color: 'hsl(62, 70%, 50%)' },
  { id: 'Magdalena - Pension',
    label: 'Magdalena - Pension',
    value: 890,
    color: 'hsl(295, 70%, 50%)'
  }
]
 */

describe('earningsPerPerson', () => {
  const earningsTypeAll = ['salary', 'dividend', 'pension'];

  const pieDataAll = earningsPerPersonPie({
    transactions,
    meta: {
      earningsTypes: earningsTypeAll,
    },
  });

  it('should return an array', () => {
    const isArray = pieDataAll.constructor === Array;
    expect(isArray).toBeTruthy();
  });

  it('should return a non empty array', () => {
    expect(pieDataAll.length > 0).toBeTruthy();
  });

  it('should return array of objects', () => {
    pieDataAll.forEach((datapoint) => {
      const isObject = datapoint.constructor === Object;
      expect(isObject).toBeTruthy();
    });
  });

  it('should return array of objects where \'id\' is a string', () => {
    pieDataAll.forEach((datapoint) => {
      const isString = datapoint.id.constructor === String;
      expect(isString).toBeTruthy();
    });
  });

  it('should return array of objects where \'label\' is a string', () => {
    pieDataAll.forEach((datapoint) => {
      const isString = datapoint.label.constructor === String;
      expect(isString).toBeTruthy();
    });
  });

  it('should return array of objects where \'value\' is a number', () => {
    pieDataAll.forEach((datapoint) => {
      const isNumber = datapoint.value.constructor === Number;
      expect(isNumber).toBeTruthy();
    });
  });

  it('should return array of objects with only keys in the earningsType array', () => {
    /** @example 'Christopher - pensions' will not show as a label in any object returned */

    const earningsTypesIncome = ['salary', 'dividend'];
    const pieDataIncomeOnly = earningsPerPersonPie({
      transactions,
      meta: {
        earningsTypes: earningsTypesIncome,
      },
    });

    pieDataIncomeOnly.forEach((dp) => {
      const [, earningType] = dp.label.split(' - ');
      expect(earningsTypesIncome.includes(earningType)).toBeTruthy();
    });

    const earningsTypesSalaryOnly = ['salary'];
    const pieDataSalaryOnly = earningsPerPersonPie({
      transactions,
      meta: {
        earningsTypes: earningsTypesSalaryOnly,
      },
    });

    pieDataSalaryOnly.forEach((dp) => {
      const [, earningType] = dp.label.split(' - ');
      expect(earningsTypesSalaryOnly.includes(earningType)).toBeTruthy();
    });

    const earningsTypesDividendsOnly = ['dividend'];
    const pieDataDividendOnly = earningsPerPersonPie({
      transactions,
      meta: {
        earningsTypes: earningsTypesDividendsOnly,
      },
    });

    pieDataDividendOnly.forEach((dp) => {
      const [, earningType] = dp.label.split(' - ');
      expect(earningsTypesDividendsOnly.includes(earningType)).toBeTruthy();
    });

    const earningsTypesPensionOnly = ['pension'];
    const pieDataPensionOnly = earningsPerPersonPie({
      transactions,
      meta: {
        earningsTypes: earningsTypesPensionOnly,
      },
    });

    pieDataPensionOnly.forEach((dp) => {
      const [, earningType] = dp.label.split(' - ');
      expect(earningsTypesPensionOnly.includes(earningType)).toBeTruthy();
    });
  });
});
