import { earningsPerPerson } from './earningsPerPerson';
import people from '../../constants/people.json';
import transactions from '../../../mocks/transactions.json';

const earningsData = earningsPerPerson(transactions);
const _people = Object.keys(earningsData);

/**
 * E.g. object
{
  chris: {
    dividend: number,
    salary: number,
    tax: number
    grossEarnings: number,
    netEarnings: number,
  },
  magda: {
    dividend: number,
    salary: number,
    tax: number
    grossEarnings: number,
    netEarnings: number,
  }
}
 */
describe('Earnings per person utility functions', () => {
  it('should return an object with keys matching the list of people', () => {
    _people.forEach((person) => {
      expect(people.includes(person)).toBeTruthy();
    });
  });

  it('each person should have a dividend value >= 0', () => {
    _people.forEach((person) => {
      const { dividend } = earningsData[person];

      expect(dividend).toBeTruthy();
      expect(dividend).toBeGreaterThanOrEqual(0);
    });
  });

  it('each person should have a salary value >= 0', () => {
    _people.forEach((person) => {
      const { salary } = earningsData[person];

      expect(salary).toBeTruthy();
      expect(salary).toBeGreaterThanOrEqual(0);
    });
  });

  it('each person should have a pension value >= 0', () => {
    _people.forEach((person) => {
      const { pension } = earningsData[person];

      expect(pension).toBeTruthy();
      expect(pension).toBeGreaterThanOrEqual(0);
    });
  });

  it('each person should have a tax value less than (salary + dividend)', () => {
    _people.forEach((person) => {
      const { tax } = earningsData[person];
      const { salary } = earningsData[person];
      const { dividend } = earningsData[person];

      expect(tax).toBeTruthy();
      expect(tax).toBeGreaterThanOrEqual(0);
      expect(tax).toBeLessThan(salary + dividend);
    });
  });

  it('each person should have a grossEarnings value equal to (dividend + salary)', () => {
    _people.forEach((person) => {
      const { grossEarnings } = earningsData[person];
      const { salary } = earningsData[person];
      const { dividend } = earningsData[person];

      expect(grossEarnings).toBeTruthy();
      expect(grossEarnings).toBeGreaterThanOrEqual(0);
      expect(grossEarnings).toEqual(salary + dividend);
    });
  });

  it('each person should have a netEarnings value equal to (grossEarnings - tax)', () => {
    _people.forEach((person) => {
      const { netEarnings } = earningsData[person];
      const { grossEarnings } = earningsData[person];
      const { tax } = earningsData[person];

      expect(netEarnings).toBeTruthy();
      expect(netEarnings).toBeGreaterThanOrEqual(0);
      expect(netEarnings).toEqual(grossEarnings - tax);
    });
  });
});
