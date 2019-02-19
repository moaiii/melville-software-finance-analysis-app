// @flow
import { createInvoice, getTotalPayable, setTotalPayable } from './CreateInvoice.action';
import { logError } from '../../../db/Global/Error/Error.action';
import { networkRequest } from '../../../lib/network';
import { createHashId } from '../../../lib/utils';
import vat from '../../../lib/utils/constants/vat.json';

export default {
  '[CreateInvoice] SET_FIELD': async (store, next, action) => {
    if (action.payload.key === 'addVat') {
      store.dispatch(getTotalPayable());
    }
  },


  '[CreateInvoice] SET_BILLABLE_ITEM_FIELD': async (store, next, action) => {
    const { key, value, property } = action.payload;
    const allItems = store.getState().CreateInvoiceReducer.fields.items;
    const newItem = allItems[key];
    newItem[`${property}`] = value;
    /** calculate total price if all data is available */
    if (property === 'unitPrice' || property === 'quantity') {
      if (value) {
        newItem.totalPrice = newItem.unitPrice * newItem.quantity;
      }
    }
    store.dispatch(getTotalPayable());
    action.payload = allItems.splice(key, 1, newItem);
  },


  '[CreateInvoice] GET_TOTAL_PAYABLE': (store, next, action) => {
    const { fields } = store.getState().CreateInvoiceReducer;
    const { addVat, items } = fields;
    const preVatTotal = items.reduce((acc, cur) => acc + cur.totalPrice, 0);

    store.dispatch(setTotalPayable({
      vatAmount: addVat
        ? preVatTotal * vat.VAT_AMOUNT
        : 0,
      totalPayable: addVat
        ? (preVatTotal * (1 + vat.VAT_AMOUNT))
        : preVatTotal,
    }));
  },


  '[CreateInvoice] CREATE_INVOICE__SUBMIT': async (store, next, action) => {
    const { fields } = store.getState().CreateInvoiceReducer;
    // const id = createHashId(fields.submissionDate, fields.total);

    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_BASE_URL}/invoice`,
      data: {
        ...fields,
        id: '48593485',
      },
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(createInvoice.resolved(res.data.Items));
    } catch (error) {
      store.dispatch(createInvoice.rejected(error));
      store.dispatch(logError(error));
    }
  },
};
