import taxRates from './tax';

describe('Calculates salary tax rates', () => {
  it('returns 0 if below the basic threshold', () => {
    // const taxBands = taxRates.calculateSalaryTax(10000, '2018-2019');
    // Object.values(taxBands)
    //   .forEach((band) => {
    //     expect(band.tax).toEqual(0);
    //   });
  });
});

describe('Calculates dividend tax rates', () => {
  it('returns 0 if below the allowance', () => {

  });
});

describe('Calculates total tax rates', () => {
  it('calculates salary tax', () => {
    const taxBands = taxRates.calculateTotalTax(50000, '2018-2019');
    // console.log('taxBands', taxBands.totalTaxAmount);
  });
});
