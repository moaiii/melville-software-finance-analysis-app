const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');

const api = new ApiBuilder();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post('/transactions', function (request) { // SAVE your icecream
  const params = {  
    TableName: 'melville-software-finance',  
    Item: {
      id: request.body.id,
      name: request.body.name,
      description: request.body.description,
      date: request.body.date,
      in: request.body.in,
      out: request.body.out,
      category: request.body.category,
    }
  }
  return dynamoDb.put(params).promise(); // returns dynamo result 
}, { success: 201 }); // returns HTTP status 201 - Created if successful

api.get('/transactions', function (request) { // GET all users
  return dynamoDb.scan({ TableName: 'melville-software-finance' }).promise()
      .then(response => response.Items)
});

module.exports = api;