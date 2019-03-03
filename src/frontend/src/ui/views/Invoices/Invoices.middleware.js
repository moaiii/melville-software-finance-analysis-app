// @flow
import { getInvoices, createInvoice } from './Invoices.action';
import { networkRequest } from '../../../lib/network';
import { openSpinner, closeSpinner } from '../../global/Spinner/Spinner.action';


export default {
  '[Invoices] GET_ALL_INVOICES__SUBMIT': async (store, next, action) => {
    store.dispatch(openSpinner({
      title: 'Fetching all invoices',
      subtitle: 'This may take a moment',
    }));

    const config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/invoices`,
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(getInvoices.resolved(res.data.Items));
      store.dispatch(closeSpinner());
    } catch (error) {
      console.error('[HYPER METRO] get all invoices middleware', error);
      store.dispatch(getInvoices.rejected(error));
    }
  },


  '[Invoices] CREATE_INVOICE__SUBMIT': async (store, next, action) => {
    store.dispatch(openSpinner({
      title: 'Saving your new invoice',
      subtitle: 'This may take a moment',
    }));

    const config = {
      method: 'POST',
      url: `${process.env.REACT_APP_API_BASE_URL}/invoice`,
      data: { ...action.payload },
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(createInvoice.resolved(res.data.Items));
      store.dispatch(closeSpinner());
    } catch (error) {
      console.error('[HYPER METRO] create an invoices middleware', error);
      store.dispatch(createInvoice.rejected(error));
    }
  },


};
