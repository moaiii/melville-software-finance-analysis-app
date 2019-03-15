import balanceCalendar from '../balanceCalendar';
import transactions from '../../../../../lib/mocks/transactions.json';

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
describe('balanceCalendar', () => {
  const dataPoints = balanceCalendar(transactions);

  it('should return an array', () => {
    const isArray = dataPoints.constructor === Array;
    expect(isArray).toBeTruthy();
  });

  it('should return an array of objects', () => {
    dataPoints.forEach(dp => {
      const isObject = dp.constructor === Object;
      expect(isObject).toBeTruthy();
    })
  });

  it('should return an non empty array', () => {
    expect(dataPoints.length).toBeGreaterThan(0);
  });

  it('each object should have a day property of type string', () => {
    dataPoints.forEach(dp => {
      const hasDayKey = dp.hasOwnProperty('day');
      const isString = dp.day.constructor === String;
      expect(hasDayKey).toBeTruthy();
      expect(isString).toBeTruthy();
    });
  });

  it('each day value should be in the format YYYY MM DD', () => {
    dataPoints.forEach(dp => {
      const { day } = dp;
      const parts = day.split('-');
      expect(parseInt(parts[0].length, 10)).toBe(4);
      expect(parseInt(parts[1].length, 10)).toBe(2);
      expect(parseInt(parts[1], 10)).toBeLessThanOrEqual(12); // its a a month
      expect(parseInt(parts[2].length, 10)).toBe(2);
      expect(parseInt(parts[2], 10)).toBeLessThanOrEqual(31); // its a a month
    });
  });

  it('each object should have a value property of type number', () => {
    dataPoints.forEach(dp => {
      const hasValueKey = dp.hasOwnProperty('value');
      const isNumber = dp.value.constructor === Number;
      expect(hasValueKey).toBeTruthy();
      expect(isNumber).toBeTruthy();
    });
  });
})