import {
  calculateCorporationTax,
  calculateNetProfit,
  calculateGrossProfit,
} from './corporationTax';
import transactions from '../../../mocks/transactions';


describe('calculateCorporationTax()', () => {
  const corpTax = calculateCorporationTax(transactions, '2018-2019');

  it('should throw if tax year is invalid', () => {
    expect(() => calculateCorporationTax(transactions, '1940-1941')).toThrow();
  });

  it('should return a number', () => {
    const isNumber = corpTax.constructor === Number;
    expect(isNumber).toBeTruthy();
  });

  it('should return zero if gross is negative', () => {
    expect(corpTax).toBe(0);
  });
});


describe('calculateGrossProfit()', () => { // before tax
  const grossProfits = calculateGrossProfit(transactions);

  it('should return a number', () => {
    const isNumber = grossProfits.constructor === Number;
    expect(isNumber).toBeTruthy();
  });

  it('should less than zero (implementation)', () => {
    expect(grossProfits).toBeLessThan(0);
  });
});


describe('calculateNetProfit()', () => { // after tax
  const netProfits = calculateNetProfit(transactions, '2018-2019');
  const grossProfits = calculateGrossProfit(transactions);

  it('should return a number', () => {
    const isNumber = netProfits.constructor === Number;
    expect(isNumber).toBeTruthy();
  });


  it('should return same as gross profits when corp tax is zero (implementation)', () => {
    expect(netProfits === grossProfits).toBeTruthy();
  });
});
