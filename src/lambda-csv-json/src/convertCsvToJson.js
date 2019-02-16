const csv = require('csvtojson');

const convertCsvToJson = (file) => {
  return new Promise((resolve, reject) => {
    const csvFilePath = file;

    csv()
      .fromString(csvFilePath)
      .then((jsonObj) => {
        // add in empty fields for receipt hyperlink and category definition
        const jsonObjWithMeta = jsonObj
          .map((obj) => {
            return {
              ...obj,
              receipt: false,
              category: false,
            };
          });

        resolve(jsonObjWithMeta);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  convertCsvToJson,
};
