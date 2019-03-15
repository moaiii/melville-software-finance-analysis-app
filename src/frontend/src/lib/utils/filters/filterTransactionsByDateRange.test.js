import {
  dateStringToNumber,
  getMaxMinOfDatesArray,
  filterTransactionsByDateRange } from './index'
import transactions from '../../mocks/transactions.json'


describe('dateStringToNumber()', () => {
  const dateString = transactions[0].Date
  const dateToNumber = dateStringToNumber(dateString)

  it('should return a number', () => {
    const isNumber = dateToNumber.constructor === Number
    expect(isNumber).toBeTruthy()
  })

  it("should return no '-' characters", () => {
    const hasHyphen = dateToNumber.toString().includes('-')
    expect(hasHyphen).toBeFalsy()
  })

  it("should return no '/' characters", () => {
    const hasSlash = dateToNumber.toString().includes('/')
    expect(hasSlash).toBeFalsy()
  })

  it('should throw if result cannot be parsed into number', () => {
    expect(() =>
      dateStringToNumber({
        Date: '17£$@%£^371!',
      })
    ).toThrow()

    expect(() =>
      dateStringToNumber({
        Date: 'henrik-larsson',
      })
    ).toThrow()
  })
})


describe('getMaxMinOfDatesArray()', () => {
  const minMaxObj = getMaxMinOfDatesArray(["15/02/2019", "11/02/2019"]);

  it('should return an object', () => {
    const isObject = minMaxObj.constructor === Object;
    expect(isObject).toBeTruthy();
  })

  it('should have a min and max key', () => {
    const hasMin = minMaxObj.hasOwnProperty('min');
    const hasMax = minMaxObj.hasOwnProperty('max');
    expect(hasMin).toBeTruthy();
    expect(hasMax).toBeTruthy();
  })

  it('should throw if given an array <!> 2', () => {
    const wayTooWee = [];
    const tooWee = new Array(1).fill('tooWee');
    const tooBig = new Array(3).fill('tooBig');
    expect(() => getMaxMinOfDatesArray(wayTooWee)).toThrow()
    expect(() => getMaxMinOfDatesArray(tooWee)).toThrow()
    expect(() => getMaxMinOfDatesArray(tooBig)).toThrow()
  })

  it('should throw if not given an array', () => {
    expect(() => getMaxMinOfDatesArray(null)).toThrow()
    expect(() => getMaxMinOfDatesArray({})).toThrow()
    expect(() => getMaxMinOfDatesArray(666)).toThrow()
    expect(() => getMaxMinOfDatesArray('hing')).toThrow()
  })

  it('returns a max value bigger than the min', () => {
    const { min, max } = minMaxObj;
    expect(min).toBeLessThanOrEqual(max);
    expect(max).toBeGreaterThanOrEqual(min);
  })
})


describe('filterTransactionsByDateRange()', () => {
  const dateRange = ["15/02/2019", "14/02/2019"]
  const filtered = filterTransactionsByDateRange(transactions, dateRange);

  it('should return an array', () => {
    const isArray = filtered.constructor === Array;
    expect(isArray).toBeTruthy();
  });

  it('should return an array of transaction objects', () => {
    filtered.forEach(item => {
      const isObject = item.constructor === Object;
      expect(isObject).toBeTruthy();
      expect(item.hasOwnProperty('Date')).toBeTruthy();
      expect(item.hasOwnProperty('receipt')).toBeTruthy();
      expect(item.hasOwnProperty('in')).toBeTruthy();
      expect(item.hasOwnProperty('category')).toBeTruthy();
      expect(item.hasOwnProperty('id')).toBeTruthy();
      expect(item.hasOwnProperty('out')).toBeTruthy();
    })
  });
})
