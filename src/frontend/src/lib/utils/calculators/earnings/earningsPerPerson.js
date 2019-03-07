import people from '../../constants/people.json';
import tax from '../tax';

/**
 * @example object returned
 *
 * //{
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
 * @param {Array<Object>} transactions list of transactions from the api
 * @returns {Object<string, number>} earnings per person
 */
const earningsPerPerson = (transactions) => {
  const { calculateTotalTax } = tax.tax;

  /**
   * Strip out transactions classed as income
   */
  const earningsPaymentsFromBusiness = transactions
    .filter(transaction => transaction.category === 'Dividend' ||
      transaction.category === 'Salary' ||
      transaction.category === 'Pension',
    );

  const earningsData = people
    .map((person) => {
      /**
       * Get all transactions labeled to this person
       */
      const personalPayments = earningsPaymentsFromBusiness // salary and dividend
        .filter(payment => payment.person === person);

      /**
       * Totals by category
       */
      const totalDividend = personalPayments
        .filter(payment => payment.category === 'Dividend')
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      const totalSalary = personalPayments
        .filter(payment => payment.category === 'Salary')
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      const totalPension = personalPayments
        .filter(payment => payment.category === 'Pension')
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      /**
       * Summary and Tax
       */
      const grossEarnings = totalSalary + totalDividend;

      const _tax = calculateTotalTax(
        grossEarnings,
        '2018-2019',
        Math.max(totalSalary, 8424),
      );

      const netEarnings = grossEarnings - _tax.totalTaxAmount;

      /**
       * Build final person object
       */
      return {
        dividend: totalDividend,
        salary: totalSalary,
        tax: _tax.totalTaxAmount,
        dividendTax: _tax.totalDividendTax,
        salaryTax: _tax.totalSalaryTax,
        grossEarnings,
        pension: totalPension,
        netEarnings,
      };
    });

  const obj = {};

  /**
   * Compile all person objects together with their name as the key
   * See example at top of function
   */
  people
    .forEach((person, index) => {
      obj[person] = earningsData[index];
    });

  return obj;
};

export {
  earningsPerPerson,
};
