import calculators from '../../../../lib/utils/calculators';
import { graphColors } from '../../../../lib/utils';

/**
 * @example data structure for pie graph
 *
 [
  {
    "id": "rust",
    "label": "rust",
    "value": 488,
    "color": "hsl(192, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 432,
    "color": "hsl(163, 70%, 50%)"
  },
  .........
]
 */

export default ({ transactions }) => {
  const { totalExpensesByCategory } = calculators;
  const totalsByCategory = totalExpensesByCategory(transactions);

  return Object
    .keys(totalsByCategory)
    .map((key, index) => {
      return {
        id: key,
        label: key,
        value: totalsByCategory[key],
        color: graphColors[index],
      };
    });
};
