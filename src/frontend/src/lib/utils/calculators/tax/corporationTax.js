import { calculateTotalExpenses } from '../expenses';
import { calculateTotalIncome } from '../income';
import corpTaxRates from '../../constants/corporation-tax-rates.json';


/**
 * @param {Array<Object>} transactions .
 * @returns {number} .
 */
const calculateGrossProfit = (transactions) => {
  const expenses = calculateTotalExpenses(transactions);
  const income = calculateTotalIncome(transactions).total;

  return income - expenses;
};


/**
 * @param {Array<Object>} transactions .
 * @param {string} taxYear .
 * @returns {number} .
 */
const calculateCorporationTax = (transactions, taxYear) => {
  const grossProfit = calculateGrossProfit(transactions);
  const taxRate = corpTaxRates[taxYear];

  if (!taxRate) {
    throw new Error(`${taxRate} is an invalid tax tax for year ${taxYear}`);
  }

  return grossProfit > 0
    ? grossProfit * taxRate
    : 0;
};


/**
 * @param {Array<Object>} transactions .
 * @param {string} taxYear .
 * @returns {number} .
 */
const calculateNetProfit = (transactions, taxYear) => {
  const gross = calculateGrossProfit(transactions);
  const corpTax = calculateCorporationTax(transactions, taxYear);

  return gross - corpTax;
};


export {
  calculateCorporationTax,
  calculateNetProfit,
  calculateGrossProfit,
};
