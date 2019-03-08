import store from '../../../../db/store'
import tax from '../../../../lib/utils/calculators/tax/personalTax'
import { graphColors } from '../../../../lib/utils'

export default meta => {
  const { incomeAmount, salaryCap } = meta
  const increment = incomeAmount / 10

  const incomeAmountIncrementsArray = []

  for (let x = 0; x <= incomeAmount; x += increment) {
    incomeAmountIncrementsArray.push(x)
  }

  /**
   * Sum down each data point and get an flat array of numbers
   */
  const taxDataPoints = incomeAmountIncrementsArray.map(_incomeAmount => {
    return tax.calculateTotalTax(_incomeAmount, '2018-2019', salaryCap)
  })

  // TODO: REFACTOR TO USE taxDataPoints as comments below
  const salaryDataPoints = incomeAmountIncrementsArray
    .map(_incomeAmount => {
      return tax.calculateSalaryTax(_incomeAmount, '2018-2019', salaryCap)
    })
    .map(obj => {
      return Object.values(obj).reduce((acc, cur) => cur.tax + acc, 0)
    })

  const dividendDataPoints = incomeAmountIncrementsArray
    .map(_incomeAmount => {
      return tax.calculateDividendTax(_incomeAmount, '2018-2019', salaryCap)
    })
    .map(obj => {
      return Object.values(obj).reduce((acc, cur) => cur.tax + acc, 0)
    })

  //   const salaryDataPoints = taxDataPoints
  //   .filter(point => point.salaryTax)
  //   .map((obj) => {
  //     return Object
  //       .values(obj)
  //       .reduce((acc, cur) => cur.tax + acc, 0);
  //   });

  // const dividendDataPoints = taxDataPoints
  //   .filter(point => point.dividendTax)
  //   .map((obj) => {
  //     return Object
  //       .values(obj)
  //       .reduce((acc, cur) => cur.tax + acc, 0);
  //   });

  /**
   * Data points
   */
  const dividendTax = taxDataPoints.map((datapoint, index) => {
    return {
      x: incomeAmountIncrementsArray[index],
      y: dividendDataPoints[index],
    }
  })

  const salaryTax = taxDataPoints.map((datapoint, index) => {
    return {
      x: incomeAmountIncrementsArray[index],
      y: salaryDataPoints[index],
    }
  })

  const totalTax = taxDataPoints.map((datapoint, index) => {
    return {
      x: incomeAmountIncrementsArray[index],
      y: salaryDataPoints[index] + dividendDataPoints[index],
    }
  })

  /**
   * Build each line object
   */
  const dividendTaxDataPoints = {
    id: 'Dividend tax',
    color: graphColors[1],
    data: dividendTax,
  }

  const salaryTaxDataPoints = {
    id: 'Salary tax',
    color: graphColors[2],
    data: salaryTax,
  }

  const totalTaxDataPoints = {
    id: 'Total tax',
    color: graphColors[3],
    data: totalTax,
  }

  /**
   * Sum it all together
   */
  return {
    data: [totalTaxDataPoints, dividendTaxDataPoints, salaryTaxDataPoints],
    keys: null,
  }
}
