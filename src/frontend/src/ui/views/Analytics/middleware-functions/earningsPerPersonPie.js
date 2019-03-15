import calculators from '../../../../lib/utils/calculators';
import { graphColors } from '../../../../lib/utils';
import { earningsEnum } from '../../../../lib/utils/enums';

const flattenDeep = require('lodash.flattendeep');

/**
 * @example data structure for pie graph
 *
[
  {
    id: 'Christopher - Dividend',
    label: 'Christopher - Dividend',
    value: 15000,
    color: 'hsl(246, 70%, 50%)' },
  { id: 'Christopher - Salary',
    label: 'Christopher - Salary',
    value: 14970,
    color: 'hsl(62, 70%, 50%)' },
  { id: 'Christopher - Pension',
    label: 'Christopher - Pension',
    value: 12000,
    color: 'hsl(295, 70%, 50%)' },
  { id: 'Magdalena - Dividend',
    label: 'Magdalena - Dividend',
    value: 5000,
    color: 'hsl(246, 70%, 50%)' },
  { id: 'Magdalena - Salary',
    label: 'Magdalena - Salary',
    value: 11000,
    color: 'hsl(62, 70%, 50%)' },
  { id: 'Magdalena - Pension',
    label: 'Magdalena - Pension',
    value: 890,
    color: 'hsl(295, 70%, 50%)'
  }
]
 */

export default ({ transactions, meta }) => {
  /** @type {Array<string>} e.g ['salary', dividend', 'pension'] */
  const { earningsTypes } = meta;

  if (earningsTypes.constructor !== Array || earningsTypes.length === 0) {
    throw new Error(
      `This earningsTypes array supplied is not valid. ${JSON.stringify(earningsTypes)}`
    )
  }

  const { earningsPerPerson } = calculators;
  const totalsByPerson = earningsPerPerson(transactions);

  const people = Object.keys(totalsByPerson);

  const earningsComponents = [...earningsTypes];

  const data = people
    .map((person) => {
      return earningsComponents
        .map((component, index) => {
          return {
            id: `${person} - ${component}`,
            label: `${person} - ${component}`,
            value: totalsByPerson[person][component.toLowerCase()],
            color: graphColors[index],
          };
        });
    });

  return flattenDeep(data);
};
