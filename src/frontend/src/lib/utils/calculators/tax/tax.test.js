import taxRates from './tax';

describe('Calculates salary tax rates', () => {
  it('returns 0 across all bands if below the allowance threshold', () => {
    const taxBands = taxRates.calculateSalaryTax(8000, '2018-2019');
    Object.values(taxBands)
      .forEach((band) => {
        expect(band.tax).toEqual(0);
      });
  });
  it('returns tax in the basic band and zero in all others', () => {
    const salaryTax = taxRates.calculateSalaryTax(10000, '2018-2019');
    console.log('salaryTax', salaryTax);
    expect(salaryTax.allowance.tax).toEqual(0);
  });
  it('returns tax in the basic band and zero in all others', () => {
    const taxBands = taxRates.calculateSalaryTax(20000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toEqual(0);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic and higher bands, zero in all others', () => {
    const taxBands = taxRates.calculateSalaryTax(50000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic, higher & additional bands, zero in all others', () => {
    const taxBands = taxRates.calculateSalaryTax(160000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toBeGreaterThan(1);
  });
});

describe('Calculates dividend tax rates', () => {
  it('returns 0 across all bands if below the allowance threshold', () => {
    const taxBands = taxRates.calculateDividendTax(1500, '2018-2019');
    Object.values(taxBands)
      .forEach((band) => {
        expect(band.tax).toEqual(0);
      });
  });
  it('returns tax in the basic band and zero in all others', () => {
    const taxBands = taxRates.calculateDividendTax(20000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toEqual(0);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic and higher bands, zero in all others', () => {
    const taxBands = taxRates.calculateDividendTax(35000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic, higher & additional bands, zero in all others', () => {
    const taxBands = taxRates.calculateDividendTax(160000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toBeGreaterThan(1);
  });
});

describe('Calculates total tax rates', () => {
  it('calculates salary tax', () => {
    const totalTaxA = taxRates.calculateTotalTax(1000, '2018-2019').totalTaxAmount;
    const totalTaxB = taxRates.calculateTotalTax(5000, '2018-2019').totalTaxAmount;
    const totalTaxC = taxRates.calculateTotalTax(10000, '2018-2019').totalTaxAmount;
    const totalTaxD = taxRates.calculateTotalTax(20000, '2018-2019').totalTaxAmount;
    const totalTaxE = taxRates.calculateTotalTax(30000, '2018-2019').totalTaxAmount;
    const totalTaxF = taxRates.calculateTotalTax(40000, '2018-2019').totalTaxAmount;
    const totalTaxG = taxRates.calculateTotalTax(50000, '2018-2019').totalTaxAmount;
  });
});
