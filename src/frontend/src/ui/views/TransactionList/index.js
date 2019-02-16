import { connect } from 'react-redux';
import { getTransactions, saveTransaction, setFilters } from './TransactionList.action';
import categories from '../../../lib/utils/constants/categories.json';
import TransactionList from './TransactionList';

function mapStoreToProps(store) {
  return {
    categories,
    filters: store.TransactionListReducer.filters,
    saveStatus: store.TransactionListReducer.saveStatus,
    transactions: store.TransactionListReducer.transactions.display,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTransactions: () => dispatch(getTransactions.submit()),
    saveTransaction: () => dispatch(saveTransaction.submit()),
    setFilters: params => dispatch(setFilters(params)),
    updateTransaction: transaction => dispatch(saveTransaction(transaction)),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(TransactionList);
