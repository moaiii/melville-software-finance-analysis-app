import {
  calculateSalaryTax,
  calculateDividendTax,
  calculateTotalTax,
} from './personalTax';


describe('Calculates salary tax rates', () => {
  it('returns 0 across all bands if below the allowance threshold', () => {
    const taxBands = calculateSalaryTax(8000, '2018-2019');
    Object.values(taxBands)
      .forEach((band) => {
        expect(band.tax).toEqual(0);
      });
  });
  it('returns tax in the basic band and zero in all others', () => {
    const salaryTax = calculateSalaryTax(10000, '2018-2019');
    expect(salaryTax.allowance.tax).toEqual(0);
  });
  it('returns tax in the basic band and zero in all others', () => {
    const taxBands = calculateSalaryTax(20000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toEqual(0);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic and higher bands, zero in all others', () => {
    const taxBands = calculateSalaryTax(50000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic, higher & additional bands, zero in all others', () => {
    const taxBands = calculateSalaryTax(160000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toBeGreaterThan(1);
  });
});

describe('Calculates dividend tax rates', () => {
  it('returns 0 across all bands if below the allowance threshold', () => {
    const taxBands = calculateDividendTax(1500, '2018-2019');
    Object.values(taxBands)
      .forEach((band) => {
        expect(band.tax).toEqual(0);
      });
  });
  it('returns tax in the basic band and zero in all others', () => {
    const taxBands = calculateDividendTax(20000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toEqual(0);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic and higher bands, zero in all others', () => {
    const taxBands = calculateDividendTax(35000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toEqual(0);
  });
  it('returns tax in the basic, higher & additional bands, zero in all others', () => {
    const taxBands = calculateDividendTax(160000, '2018-2019');
    expect(taxBands.allowance.tax).toEqual(0);
    expect(taxBands.basic.tax).toBeGreaterThan(1);
    expect(taxBands.higher.tax).toBeGreaterThan(1);
    expect(taxBands.additional.tax).toBeGreaterThan(1);
  });
});

describe('Calculates total tax rates', () => {
  it('calculates salary tax', () => {
    const totalTaxA = calculateTotalTax(1000, '2018-2019').totalTaxAmount;
    const totalTaxB = calculateTotalTax(5000, '2018-2019').totalTaxAmount;
    const totalTaxC = calculateTotalTax(10000, '2018-2019').totalTaxAmount;
    const totalTaxD = calculateTotalTax(20000, '2018-2019').totalTaxAmount;
    const totalTaxE = calculateTotalTax(30000, '2018-2019').totalTaxAmount;
    const totalTaxF = calculateTotalTax(40000, '2018-2019').totalTaxAmount;
    const totalTaxG = calculateTotalTax(50000, '2018-2019').totalTaxAmount;
  });
});
