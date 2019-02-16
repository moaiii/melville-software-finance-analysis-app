const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post(
  '/transactions',
  (request) => {
    const params = {
      RequestItems: {
        'melville-software-finance': request.body.map((transaction) => {
          return {
            PutRequest: {
              Item: {
                id: transaction.id,
                Date: transaction.Date,
                Reference: transaction.Reference,
                type: transaction['Transaction Type'],
                in: transaction['Money In'],
                out: transaction['Money Out'],
                Balance: transaction.Balance,
                category: transaction.category,
                receipt: transaction.receipt,
              },
            },
          };
        }),
      },
    };

    return dynamoDb.batchWrite(params).promise();
  },
  { success: 201 },
);

api.get('/transactions', (request) => {
  return dynamoDb
    .scan({ TableName: 'melville-software-finance' })
    .promise()
    .then(response => response);
});

api.put('/transaction', function (request) {
  const params = {
    TableName: 'melville-software-finance',
    Key: {
      id: request.body.id,
    },
    UpdateExpression: `set 
      id = :a,
      receipt = :b,
      category = :c,
    `,
    ExpressionAttributeValues: {
      ':a': request.body.id,
      ':b': request.body.receipt,
      ':c': request.body.category,
    },
  };

  return dynamoDb
    .update(params)
    .promise()
    .then(response => response);
});

module.exports = api;
