// @flow

type State = {};

const initialState = {
  invoices: [],
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[Invoices] GET_ALL_INVOICES__RESOLVED': {
      return {
        ...state,
        invoices: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
