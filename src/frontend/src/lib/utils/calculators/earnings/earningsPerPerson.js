import store from '../../../../db/store';
import people from '../../constants/people.json';
import tax from '../tax';

const earningsPerPerson = () => {
  const transactions = store.getState().TransactionListReducer.transactions.display;

  const earningsPaymentsFromBusiness = transactions
    .filter(transaction => transaction.category === 'dividend' || transaction.category === 'salary');

  const earningsPerPerson = people
    .map(person => {
      const personalPayments = earningsPaymentsFromBusiness // salary and dividend
        .filter(payment => payment.person === person);

      const totalDividend = personalPayments
        .filter(payment => payment.category === 'dividend')
        .reduce((acc, cur) => acc + cur.value, 0);

      const totalSalary = personalPayments
        .filter(payment => payment.category === 'salary')
        .reduce((acc, cur) => acc + cur.value, 0);

      const grossEarnings = personalPayments
        .reduce((acc, cur) => acc + cur.value, 0);

      const _tax = tax.calculateTotalTax(grossEarnings, '2018-2019', 8424);
      const netEarnings = grossEarnings - _tax.totalTaxAmount;

      return {
        dividend: totalDividend,
        salary: totalSalary,
        tax: _tax.totalTaxAmount,
        grossEarnings,
        netEarnings,
      }
    })

  let obj = {};

  Object
    .keys(people)
    .forEach((person, index) => obj[person] = earningsPerPerson[index]);

  return obj;
};

export default {
  earningsPerPerson,
};