const createNetworkReducer = ( type, payload ) => {
  const { value = null, statusCode = 0, message = '' } = payload;
  
  return {
    [`${type}__SUBMIT`]: {
      value,
      statusCode,
      pending: true,
      complete: false,
      error: false,
      message,
    },
    [`${type}__RESOLVED`]: {
      value,
      statusCode,
      pending: false,
      complete: true,
      error: false,
      message,
    },
    [`${type}__ERROR`]: {
      value,
      statusCode,
      pending: false,
      complete: false,
      error: true,
      message,
    },
  }
};

export default createNetworkReducer;
