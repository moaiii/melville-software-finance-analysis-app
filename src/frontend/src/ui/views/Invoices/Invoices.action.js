// @flow
import { /* actionCreator, */ networkActionCreator } from '../../../lib/redux';

export const getInvoices
  = networkActionCreator('[Invoices] GET_ALL_INVOICES');

export const createInvoice
  = networkActionCreator('[Invoices] CREATE_INVOICE');
