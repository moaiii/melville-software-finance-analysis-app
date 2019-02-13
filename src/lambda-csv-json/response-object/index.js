const createResponseObject = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ body }),
  };
};

module.exports = { createResponseObject };
