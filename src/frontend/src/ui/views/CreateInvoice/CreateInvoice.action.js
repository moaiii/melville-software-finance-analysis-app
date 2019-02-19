// @flow
import { actionCreator, networkActionCreator } from '../../../lib/redux';

export const setInvoiceField
  = actionCreator('[CreateInvoice] SET_FIELD');

export const addBillableItem
  = actionCreator('[CreateInvoice] ADD_BILLABLE_ITEM');

export const removeBillableItem
  = actionCreator('[CreateInvoice] REMOVE_BILLABLE_ITEM');

export const setBillableItemField
  = actionCreator('[CreateInvoice] SET_BILLABLE_ITEM_FIELD');

export const createInvoice
  = networkActionCreator('[CreateInvoice] CREATE_INVOICE');

export const getTotalPayable
  = actionCreator('[CreateInvoice] GET_TOTAL_PAYABLE');

export const setTotalPayable
  = actionCreator('[CreateInvoice] SET_TOTAL_PAYABLE');
