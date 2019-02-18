// @flow
import { connect } from 'react-redux';
import store from '../../../db/store';
import { getInvoices } from './Invoices.action';
import Invoices from './Invoices.jsx';

function mapStoreToProps(store) {
  return {
    invoices: store.InvoicesReducer.invoices,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInvoices: () => dispatch(getInvoices.submit()),
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Invoices);
