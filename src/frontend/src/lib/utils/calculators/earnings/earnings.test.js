import earningsPerPerson from './earningsPerPerson';
import people from '../../constants/people.json';

const _people = Object.keys(earningsPerPerson);

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
      const dividendValue = earningsPerPerson[person].dividend;
      expect(dividendValue).toBeTruthy();
      expect(dividendValue).toBeGreaterThanOrEqual(0);
    });
  });

  it('each person should have a salary value >= 0', () => {
    _people.forEach((person) => {
      const salaryValue = earningsPerPerson[person].salary;
      expect(salaryValue).toBeTruthy();
      expect(salaryValue).toBeGreaterThanOrEqual(0);
    });
  });

  it('each person should have a tax value less than (salary + dividend)', () => {
    _people.forEach((person) => {
      const tax = earningsPerPerson[person].tax;
      const salaryValue = earningsPerPerson[person].salary;
      const dividendValue = earningsPerPerson[person].dividend;

      expect(tax).toBeTruthy();
      expect(tax).toBeGreaterThanOrEqual(0);
      expect(tax).toBeLessThan(salaryValue + dividendValue);
    });
  });

  it('each person should have a grossEarnings value equal to (dividend + salary)', () => {
    _people.forEach((person) => {
      const grossEarnings = earningsPerPerson[person].grossEarnings;
      const salaryValue = earningsPerPerson[person].salary;
      const dividendValue = earningsPerPerson[person].dividend;

      expect(grossEarnings).toBeTruthy();
      expect(grossEarnings).toBeGreaterThanOrEqual(0);
      expect(grossEarnings).toEqual(salaryValue + dividendValue);
  });

  it('each person should have a netEarnings value equal to (grossEarnings - tax)', () => {
    _people.forEach((person) => {
      const netEarnings = earningsPerPerson[person].netEarnings;
      const grossEarnings = earningsPerPerson[person].grossEarnings;
      const tax = earningsPerPerson[person].tax;

      expect(netEarnings).toBeTruthy();
      expect(netEarnings).toBeGreaterThanOrEqual(0);
      expect(netEarnings).toEqual(grossEarnings - tax);
  });
});
