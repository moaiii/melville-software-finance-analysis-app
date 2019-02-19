// @flow
import { actionCreator } from '../../../lib/redux';

export const setInvoiceField
  = actionCreator('[CreateInvoice] SET_FIELD');

export const addBillableItem
  = actionCreator('[CreateInvoice] ADD_BILLABLE_ITEM');

export const removeBillableItem
  = actionCreator('[CreateInvoice] REMOVE_BILLABLE_ITEM');

export const setBillableItemField
  = actionCreator('[CreateInvoice] SET_BILLABLE_ITEM_FIELD');
