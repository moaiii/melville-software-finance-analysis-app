import expensesByCategoryPie from '../expensesByCategoryPie';
import transactions from '../../../../../lib/mocks/transactions.json';

/**
 * @example data structure for pie graph
 * [
  {
    "id": "rust",
    "label": "rust",
    "value": 488,
    "color": "hsl(192, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 432,
    "color": "hsl(163, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 342,
    "color": "hsl(70, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 371,
    "color": "hsl(197, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 319,
    "color": "hsl(321, 70%, 50%)"
  }
]
 */
describe('expensesByCategoryPie', () => {
  const pieData = expensesByCategoryPie({ transactions });

  it('should return an array', () => {
    const isArray = pieData.constructor === Array;
    expect(isArray).toBeTruthy();
  });

  it('should return a non empty array', () => {
    expect(pieData.length > 0).toBeTruthy();
  });

  it('should return array of objects', () => {
    pieData.forEach((datapoint) => {
      const isObject = datapoint.constructor === Object;
      expect(isObject).toBeTruthy();
    });
  });

  it('should return array of objects where \'id\' is a string', () => {
    pieData.forEach((datapoint) => {
      const isString = datapoint.id.constructor === String;
      expect(isString).toBeTruthy();
    });
  });

  it('should return array of objects where \'label\' is a string', () => {
    pieData.forEach((datapoint) => {
      const isString = datapoint.label.constructor === String;
      expect(isString).toBeTruthy();
    });
  });

  it('should return array of objects where \'value\' is a number', () => {
    pieData.forEach((datapoint) => {
      const isNumber = datapoint.value.constructor === Number;
      expect(isNumber).toBeTruthy();
    });
  });
});
