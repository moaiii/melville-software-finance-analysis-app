const networkReducerInitialState = (additionalState) => {
  return {
    ...additionalState,
    value: null,
    statusCode: 0,
    pending: false,
    complete: false,
    error: false,
    message: '',
  }
}

export default networkReducerInitialState;
