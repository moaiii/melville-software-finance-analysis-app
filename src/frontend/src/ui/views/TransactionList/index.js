import { getTransactions, saveTransaction } from './TransactionList.action';

import TransactionList from './TransactionList';
import categories from '../../../lib/utils/constants/categories.json';
import { connect } from 'react-redux';
import store from '../../../db/store';

function mapStoreToProps(store) {
  return {
    saveStatus: store.TransactionListReducer.saveStatus,
    transactions: store.TransactionListReducer.transactions,
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTransactions: () => dispatch(getTransactions.submit()),
    saveTransaction: () => dispatch(saveTransaction.submit()),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(TransactionList);
