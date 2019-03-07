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

  const taxBands = Object
    .values(bands)
    .map((rate) => {
      let range;
      const { from, to } = rate.amount;

      if (income < to) {
        range = income - from;
      }

      if (income > to) {
        range = to - from;
      }

      return {
        taxRate: rate.tax,
        taxable: range < 0 || !range ? 0 : range,
        tax: range > 0 ? Math.ceil(range * rate.tax) : 0,
      };
    });

  return Object.assign({}, {}, {
    allowance: taxBands[0],
    basic: taxBands[1],
    higher: taxBands[2],
    additional: taxBands[3],
  });
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
 * @param {?number} salaryCapInput salary cap from user input, optional
 * @returns {Object<string | number>} taxBands
 */
const calculateTotalTax = (totalIncome, taxYear, salaryCapInput) => {
  checkForErrors(totalIncome, taxYear);
  const salaryCap = salaryCapInput || incomeRates[taxYear].salary.allowance.amount.to;
  const salaryTax = calculateSalaryTax(salaryCap, taxYear);
  const dividendTax = calculateDividendTax(totalIncome - salaryCap, taxYear);

  const totalDividendTax = Object.values(dividendTax)
    .reduce((acc, cur) => cur.tax + acc, 0);

  const totalSalaryTax = Object.values(salaryTax)
    .reduce((acc, cur) => cur.tax + acc, 0);

  const totalTaxAmount = totalDividendTax + totalSalaryTax;

  return {
    totalIncome,
    salaryTax,
    totalSalaryTax,
    dividendTax,
    totalDividendTax,
    totalTaxAmount,
  };
};


export default {
  calculateSalaryTax,
  calculateDividendTax,
  calculateTotalTax,
};
