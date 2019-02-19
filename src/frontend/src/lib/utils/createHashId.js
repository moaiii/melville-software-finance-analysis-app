const Hashids = require('hashids');

export default (date, balance) => {
  // if (!balance) {
  //   throw new Error('Cant create hash ID - No balance', balance);
  // }

  if (!date) {
    throw new Error('Cant create hash ID - No date', date);
  }

  const hashids = new Hashids(date);
  return hashids.encode(parseInt(balance, 10), 100, 10, 1);
};
