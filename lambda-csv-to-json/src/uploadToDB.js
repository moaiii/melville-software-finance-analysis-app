const request = require('request');
const { generateId } = require('./generateId');

const uploadToDb = (transactions) => {
  const { DB_URL } = process.env;
  const url = `${DB_URL}/transactions`;

  const transactionsWithIds = transactions
    .map((transaction) => {
      const id = generateId(transaction);
      return { ...transaction, id };
    });

  return new Promise((resolve, reject) => {
    const ttt = JSON.stringify(transactionsWithIds);
    console.log('ttt', ttt, typeof ttt);

    request
      .post({
        url,
        body: transactionsWithIds,
      }, (error, response, body) => {
        if (error) {
          console.log('error in uploadToDb()', error);
          reject(error);
        }
        
        console.log('body in uploadToDb()', body);
        if (response) {
          resolve(body);
        }
      });
  });
};

module.exports = {
  uploadToDb,
};
