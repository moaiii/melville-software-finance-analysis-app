// @flow
import {
  getTransactions,
  saveTransaction,
  setDisplayedTransactions,
} from './TransactionList.action';

import { networkRequest } from '../../../lib/network';

export default {
  '[TransactionList] GET_TRANSACTIONS__SUBMIT': async (store, next, action) => {
    const config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/transactions`,
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(getTransactions.resolved(res.data.Items));
      store.dispatch(setDisplayedTransactions());
    } catch (error) {
      console.error('[APP ERROR] get transactions middleware', error);
      store.dispatch(getTransactions.rejected(error));
    }
  },

  '[TransactionList] SET_DISPLAYED_TRANSACTIONS': (store, next, action) => {
    const { filters, transactions } = store.getState().TransactionListReducer;
    const {
      receipt,
      missingCategory,
      // dateRange,
      credits,
      debits,
      valueRange,
    } = filters;

    const filteredTransactions = transactions.api
      .filter((t) => {
        const isCredit = !!parseInt(t.in, 10);
        const isDebit = !!parseInt(t.out, 10);
        return isCredit === credits || isDebit === debits;
      });

    action.payload = filteredTransactions;
  },

  '[TransactionList] SAVE_TRANSACTION__SUBMIT': async (store, next, action) => {
    const config = {
      method: 'PUT',
      url: `${process.env.REACT_APP_API_BASE_URL}/transaction`,
      data: {
        id: action.payload.id,
        hyperlink: action.payload.hyperlink,
        category: action.payload.category,
      },
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(saveTransaction.resolved(res));
    } catch (error) {
      console.error('[APP ERROR] get transactions middleware', error);
      store.dispatch(saveTransaction.rejected(error));
    }
  },

  '[TransactionList] SET_FILTERS': (store, next, action) => {
    let { key, value } = action.payload;

    const currentFilterState = store
      .getState().TransactionListReducer.filters;

    // TODO: refactor section
    if (key === 'date-from') {
      key = 'dateRange';
      value = [value, currentFilterState.dateRange[1]];
    }

    if (key === 'date-to') {
      key = 'dateRange';
      value = [currentFilterState.dateRange[0], value];
    }

    const newFilterState = Object
      .assign({}, currentFilterState, {
        [key]: value,
      });

    // re-assign payload with new data structure
    action.payload = newFilterState;

    // reorganise transactions displayed based on new filters set
    store.dispatch(setDisplayedTransactions());
  },
};
