// @flow
import { getShortToday } from '../../../lib/utils';

type State = {
  // transactions: Array<Transaction>,
};

const initialState = {
  transactions: {
    api: [],
    display: [],
  },
  saveStatus: null,
  filters: {
    receipt: false,
    missingCategory: false,
    dateRange: ['2018-01-01', getShortToday()], // [from, to]
    credits: true,
    debits: true,
    valueRange: [0, 1000000], // [smallest, largest]
  },
};

export default (state: State = initialState, action): State => {
  switch (action.type) {
    case '[TransactionList] GET_TRANSACTIONS__RESOLVED': {
      return {
        ...state,
        transactions: {
          api: action.payload,
          display: state.transactions.display,
        },
      };
    }
    case '[TransactionList] SET_DISPLAYED_TRANSACTIONS': {
      return {
        ...state,
        transactions: {
          api: state.transactions.api,
          display: action.payload.transactions,
        },
      };
    }
    case '[TransactionList] SAVE_TRANSACTION__RESOLVED': {
      return {
        ...state,
        saveStatus: action.payload,
      };
    }
    case '[TransactionList] SET_FILTERS': {
      return {
        ...state,
        filters: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
