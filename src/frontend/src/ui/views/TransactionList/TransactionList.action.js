// @flow
import { networkActionCreator } from '../../../lib/redux';

export const getTransactions = networkActionCreator(
  '[TransactionList] GET_TRANSACTIONS',
);

export const saveTransaction = networkActionCreator(
  '[TransactionList] SAVE_TRANSACTION',
);
