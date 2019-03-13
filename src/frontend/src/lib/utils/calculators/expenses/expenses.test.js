import transactions from '../../../mocks/transactions.json';
import {
  groupExpensesByCategory,
  totalExpensesByCategory,
  calculateTotalExpenses,
} from './expenses';

const expensesByCategory = groupExpensesByCategory(transactions);
const totalByCategory = totalExpensesByCategory(expensesByCategory);
const totalExpenses = calculateTotalExpenses(transactions);


describe('groupExpensesByCategory()', () => {
  it('should return an object', () => {
    const isObject = expensesByCategory.constructor === Object;
    expect(isObject).toBeTruthy();
  });

  it('should return object with arrays as values', () => {
    const values = Object.values(expensesByCategory);
    values.forEach((val) => {
      const isArray = val.constructor === Array;
      expect(isArray).toBeTruthy();
    });
  });

  it('should not have an object with an value in the \'in\' field', () => {
    const values = Object.values(expensesByCategory);
    values.forEach((val) => {
      const isIncome = parseInt(val.in, 0) >= 0;
      expect(isIncome).toBeFalsy();
    });
  });
});


describe('totalExpensesByCategory()', () => {
  it('should return an object', () => {
    const isObject = totalByCategory.constructor === Object;
    expect(isObject).toBeTruthy();
  });

  it('should return an object where all values are positive numbers', () => {
    const totals = Object.values(totalByCategory);
    totals.forEach((total) => {
      const isNumber = total.constructor === Number;
      const isPositive = total >= 0;
      expect(isNumber).toBeTruthy();
      expect(isPositive).toBeTruthy();
    });
  });

  it('should have the same keys and length as the input object', () => {
    const totals = Object.keys(totalByCategory);
    const categorised = Object.keys(expensesByCategory);
    expect(totals.length).toEqual(categorised.length);
  });
});


describe('calculateTotalExpenses()', () => {
  it('should return a number', () => {
    const isNumber = totalExpenses.constructor === Number;
    expect(isNumber).toBeTruthy();
  });

  it('should return a number above zero', () => {
    expect(totalExpenses).toBeGreaterThanOrEqual(0);
  });
});
