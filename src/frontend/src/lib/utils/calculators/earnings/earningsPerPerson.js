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

  const earningsPaymentsFromBusiness = transactions
    .filter(transaction => transaction.category === 'Dividend'
      || transaction.category === 'Salary');

  const earningsData = people
    .map((person) => {
      const personalPayments = earningsPaymentsFromBusiness // salary and dividend
        .filter(payment => payment.person === person);

      const totalDividend = personalPayments
        .filter(payment => payment.category === 'Dividend')
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      const totalSalary = personalPayments
        .filter(payment => payment.category === 'Salary')
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      const grossEarnings = personalPayments
        .reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur.out, 10), 0);

      const _tax = calculateTotalTax(grossEarnings, '2018-2019', Math.max(totalSalary, 8424));
      const netEarnings = grossEarnings - _tax.totalTaxAmount;

      return {
        dividend: totalDividend,
        salary: totalSalary,
        tax: _tax.totalTaxAmount,
        totalDividendTax: _tax.totalDividendTax,
        totalSalaryTax: _tax.totalSalaryTax,
        grossEarnings,
        netEarnings,
      };
    });

  const obj = {};

  people
    .forEach((person, index) => {
      obj[person] = earningsData[index];
    });

  return obj;
};

export {
  earningsPerPerson,
};
