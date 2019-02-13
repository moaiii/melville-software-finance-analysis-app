const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post(
  '/transactions',
  function (request) {
    // return {"request.body": request.body, "type": typeof request.body, request: request};
    const params = {
      RequestItems: {
        'melville-software-finance': request.body.map((transaction) => {
          return {
            PutRequest: {
              Item: {
                id: transaction.id,
                Date: transaction.Date,
                Reference: transaction.Reference,
                'Transaction Type': transaction['Transaction Type'],
                'Money In': transaction['Money In'],
                'Money Out': transaction['Money Out'],
                Balance: transaction.Balance,
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

api.get('/transactions', function (request) {
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
      hyperlink = :b,
      category = :c,

    `,
    ExpressionAttributeValues: {
      ':a': request.body.id,
      ':b': request.body.hyperlink,
      ':c': request.body.category,
    },
  };

  return dynamoDb
    .update(params)
    .promise()
    .then(response => response);
});

module.exports = api;
