const generateId = (transaction) => {
  const { Date, Balance } = transaction;
  return Date.replace(/\//g, '') + Balance.replace(/\./g, '');
};

module.exports = {
  generateId,
};
