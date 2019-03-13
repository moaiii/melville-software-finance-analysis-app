import {calculateTotalExpenses} from '../expenses';
import {calculateTotalIncome} from '../income';

/**
 * income
 * expenses
 * grossProfit
 * tax
 * netProfit < dividends
 */

const calculateCorporationTax = (transactions) => {
  const grossProfit = calculateGrossProfit(transactions);
}

const calculateGrossProfit = (transactions) => {
  const expenses = calculateTotalExpenses(transactions);
  const income = calculateTotalIncome(transactions).total;

  return income - expenses;
}

const calculateNetProfit = () => {

}

export {
  calculateCorporationTax,
  calculateNetProfit,
  calculateGrossProfit,
}