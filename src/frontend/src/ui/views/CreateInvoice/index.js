// @flow
import { connect } from 'react-redux';
import CreateInvoice from './CreateInvoice.jsx';
import {
  setInvoiceField,
  addBillableItem,
  removeBillableItem,
  setBillableItemField,
} from './CreateInvoice.action';
import store from '../../../db/store';

function mapStoreToProps(store) {
  return {
    fields: store.CreateInvoiceReducer.fields,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInvoiceField: config => dispatch(setInvoiceField(config)),
    addBillableItem: () => dispatch(addBillableItem()),
    removeBillableItem: index => dispatch(removeBillableItem(index)),
    setBillableItemField: index => dispatch(setBillableItemField(index)),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(CreateInvoice);
