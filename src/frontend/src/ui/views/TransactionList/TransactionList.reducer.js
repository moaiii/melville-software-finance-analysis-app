// @flow

type State = {
  transactions: Array<Transaction>,
};

const initialState = {
  transactions: [],
  saveStatus: null,
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[TransactionList] GET_TRANSACTIONS__RESOLVED': {
      return {
        ...state,
        transactions: action.payload,
      };
    }

    case '[TransactionList] SAVE_TRANSACTION__RESOLVED': {
      return {
        ...state,
        saveStatus: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
