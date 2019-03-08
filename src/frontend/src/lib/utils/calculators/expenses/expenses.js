import categories from '../../constants/categories'
const groupBy = require('lodash.groupby')

const groupExpensesByCategory = transactions => {
  return groupBy(transactions, 'Category')
}

const totalExpensesByCategory = transactionsByCategory => {
  const newObj = {}

  const categories = Object.keys(transactionsByCategory)

  const totals = categories.map(category => {
    return transactionsByCategory[category].reduce(
      (acc, cur) => acc + cur.out,
      0
    )
  })

  categories.forEach((category, index) => {
    newObj[category] = totals[index]
  })

  return newObj
}

const totalAllExpenses = () => {}

export { groupExpensesByCategory, totalExpensesByCategory, totalAllExpenses }
