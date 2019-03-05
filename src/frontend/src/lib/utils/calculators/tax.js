import incomeRates from '../constants/income-thresholds.json';


const checkForErrors = (amount, taxYear) => {
  if (amount > 100000000) {
    throw new Error('amount to be taxed un-usually high. Please check');
  }
  if (amount.constructor !== Number) {
    throw new Error('Amount to be taxed is not a number');
  }
  if (!incomeRates[taxYear]) {
    throw new Error('Tax year doesnt exist!');
  }
};


/**
 * @param {number} income values
 * @param {string} rateType e.g. basic
 * @param {string} taxYear e.g. 2018-19
 * @returns {Object<string | number>} bands
 */
const calculateBands = (income, rateType, taxYear) => {
  const bands = incomeRates[taxYear][rateType];
  const bandNames = Object.keys(bands);

  const taxBands = Object
    .values(bands)
    .map((rate, index) => {
      let range;
      const { from, to } = rate.amount;

      if (income < to) {
        range = income - from;
      }

      if (income > to) {
        range = to - from;
      }

      return {
        band: bandNames[index],
        taxRate: rate.tax,
        taxable: range < 0 ? 0 : range,
        tax: range > 0 ? range * rate.tax : 0,
      };
    });

  console.log('taxBands', taxBands);
  return taxBands;
};


/**
 * @param {number} salaryIncome monies to be taxed
 * @param {string} taxYear tax year april to april
 * @returns {Object<string | number>} taxBands
 */
const calculateSalaryTax = (salaryIncome, taxYear) => {
  checkForErrors(salaryIncome, taxYear);
  return calculateBands(salaryIncome, 'salary', taxYear);
};


/**
 * @param {number} dividendIncome monies to be taxed
 * @param {string} taxYear tax year april to april
 * @returns {Object<string | number>} taxBands
 */
const calculateDividendTax = (dividendIncome, taxYear) => {
  checkForErrors(dividendIncome, taxYear);
  return calculateBands(dividendIncome, 'dividend', taxYear);
};


/**
 * @param {number} totalIncome monies to be taxed
 * @param {string} taxYear tax year april to april
 * @returns {Object<string | number>} taxBands
 */
const totalTax = (totalIncome, taxYear) => {
  checkForErrors(totalIncome, taxYear);
  const salaryCap = incomeRates[taxYear].salary.allowance.to;
  const salaryTax = calculateSalaryTax(salaryCap, taxYear);
  const dividendTax = calculateDividendTax(totalIncome - salaryCap, taxYear);
};


export default {
  calculateSalaryTax,
  calculateDividendTax,
  totalTax,
};
