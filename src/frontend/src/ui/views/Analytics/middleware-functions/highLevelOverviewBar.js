import calculators from '../../../../lib/utils/calculators';
import { graphColors } from '../../../../lib/utils';

/**
 * @example data structure for single grouped bar graph
 *
[
  {
    "dataRange": "2018-2019",
    "income": 132,
    "incomeColor": "hsl(352, 70%, 50%)",
    "corporationTax": 178,
    "corporationTaxColor": "hsl(186, 70%, 50%)",
    "expenses": 141,
    "expensesColor": "hsl(266, 70%, 50%)",
    "dividend": 105,
    "dividendColor": "hsl(172, 70%, 50%)",
    "surplus": 112,
    "surplusColor": "hsl(355, 70%, 50%)",
  }
]
 */

export default ({ transactions, taxYear }) => {
  const earningsPerPerson = calculators.earningsPerPerson(transactions);
  const people = Object.keys(earningsPerPerson);
  const totalDividend = people
    .map(person => earningsPerPerson[person].dividend)
    .reduce((acc, cur) => acc + cur, 0);

  return [
    {
      dataRange: taxYear,
      income: calculators.calculateTotalIncome(transactions).total,
      incomeColor: graphColors[0],
      corporationTax: calculators.calculateCorporationTax(transactions, taxYear),
      corporationTaxColor: graphColors[1],
      expenses: calculators.calculateTotalExpenses(transactions),
      expensesColor: graphColors[2],
      dividends: totalDividend,
      dividendsColor: graphColors[3],
    },
  ];
};
