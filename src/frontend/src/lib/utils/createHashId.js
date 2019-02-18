const Hashids = require('hashids');


export default (balance, date) => {
  if (!balance) {
    throw new Error('Cant create hash ID - No balance', balance);
  }

  if (!date) {
    throw new Error('Cant create hash ID - No date', date);
  }

  const hashids = new Hashids();
  return hashids.encode(balance + date);
};
