// @flow
import { connect } from 'react-redux';
import CreateInvoice from './CreateInvoice.jsx';
import {
  setInvoiceField,
  addBillableItem,
  removeBillableItem,
  setBillableItemField,
  createInvoice,
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
    createInvoice: () => dispatch(createInvoice.submit()),
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(CreateInvoice);
