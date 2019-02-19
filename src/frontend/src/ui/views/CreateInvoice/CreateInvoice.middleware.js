// @flow
import * as actions from './CreateInvoice.action';

export default {
  '[CreateInvoice] SET_FIELD': async (store, next, action) => {
    console.log(action);
  },


  '[CreateInvoice] SET_BILLABLE_ITEM_FIELD': async (store, next, action) => {
    const { key, value, property } = action.payload;

    const allItems = store
      .getState().CreateInvoiceReducer.fields.items;

    // change

    const newItem = allItems[key];

    newItem[`${property}`] = value;

    /** calculate total price if all data is available */
    if (property === 'unitPrice' || property === 'quantity') {
      if (value) {
        newItem.totalPrice = newItem.unitPrice * newItem.quantity;
      }
    }

    action.payload = allItems.splice(key, 1, newItem);
  },
};
