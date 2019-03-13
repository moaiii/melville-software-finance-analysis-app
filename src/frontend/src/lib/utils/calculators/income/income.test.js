import calculateTotalIncome from './income';
import transactions from '../../../mocks/transactions.json';

/**
 * {
 *  march: {
 *    income: [
 *      {}, {}
 *    ],
 *    total: number
 * }
 *  april:
 *    income: [
 *      {}, {}
 *    ]
 *   total: number
 */

const _incomeByMonth = calculateTotalIncome(transactions, 'month');
const _incomeByQuarter = calculateTotalIncome(transactions, 'quarter');
const _incomeByYear = calculateTotalIncome(transactions, 'year');

describe('get Income function', () => {
  it('should return an array of length > 0', () => {
    expect(Object.keys(_incomeByMonth).length).toBeGreaterThan(0);
  });
});
