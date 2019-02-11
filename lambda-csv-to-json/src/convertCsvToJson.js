const csv = require('csvtojson');

const convertCsvToJson = (file) => {
  return new Promise((resolve, reject) => {
    const csvFilePath = file;

    csv()
      .fromString(csvFilePath)
      .then((jsonObj) => {
        resolve(jsonObj);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  convertCsvToJson,
};
