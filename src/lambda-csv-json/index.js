const AWS = require('aws-sdk');
const { convertCsvToJson, uploadToDb } = require('./src');
const { createResponseObject } = require('./response-object');

const s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    /** Read csv file from S3 bucket event */
    const srcBucket = event.Records[0].s3.bucket.name;
    const srcKey = decodeURIComponent(
      event.Records[0].s3.object.key.replace(/\+/g, ' '),
    );
    // const dstKey = `${srcKey}-json`;

    s3.getObject(
      {
        Bucket: srcBucket,
        Key: srcKey,
      },
      (s3CsvError, s3CsvFile) => {
        if (s3CsvError) {
          const response = createResponseObject(
            500,
            `Error reading file from S3 \n ${s3CsvError}`,
          );
          callback(null, response);
        }

        if (s3CsvFile) {
          const csvString = s3CsvFile.Body.toString('utf-8');

          convertCsvToJson(csvString)
            .then((transactionsJson) => {
              uploadToDb(transactionsJson)
                .then((dbResult) => {
                  console.log('dbResult', dbResult);
                  /** Upload json version to S3 */
                  // s3.putObject({
                  //   Bucket: srcBucket,
                  //   Key: dstKey,
                  //   Body: JSON.stringify(transactionsJson),
                  //   ContentType: 'application/json',
                  // }, (s3Error, s3Data) => {
                  //   if (s3Error) {
                  //     console.log('s3Error', s3Error);
                  //     const response = createResponseObject(500,
                  //       `Error uploading json file to S3 \n ${s3Error}`);
                  //     callback(null, response);
                  //   }

                  // if (s3Data) {
                  // console.log('s3Data', s3Data);
                  const response = createResponseObject(
                    200,
                    'Transaction JSON successfully updated \n',
                  );
                  callback(null, response);
                  // }
                })
                .catch((dbError) => {
                  console.log('dbError', dbError);
                  const response = createResponseObject(
                    500,
                    `Error uploading to DB \n ${dbError}`,
                  );
                  callback(null, response);
                });
            })
            .catch((csvError) => {
              console.log('csvError', csvError);
              const response = createResponseObject(
                500,
                `Error converting csv file \n ${csvError}`,
              );
              callback(null, response);
            });
        }
      },
    );
  } catch (e) {
    console.log('e', e);
    const response = createResponseObject(
      500,
      `Error in try catch block \n ${e}`,
    );
    callback(null, response);
  }
};
