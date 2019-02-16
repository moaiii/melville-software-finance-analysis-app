// @flow
import { actionCreator, networkActionCreator } from '../../../lib/redux';

export const getTransactions = networkActionCreator(
  '[TransactionList] GET_TRANSACTIONS',
);

export const setDisplayedTransactions = actionCreator(
  '[TransactionList] SET_DISPLAYED_TRANSACTIONS',
);

export const saveTransaction = networkActionCreator(
  '[TransactionList] SAVE_TRANSACTION',
);

export const setFilters = actionCreator(
  '[TransactionList] SET_FILTERS',
);

export const updateTransaction = actionCreator(
  '[TransactionList] UPDATE_TRANSACTION',
);
