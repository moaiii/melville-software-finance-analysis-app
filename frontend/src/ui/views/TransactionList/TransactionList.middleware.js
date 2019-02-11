// @flow
import {getTransactions, saveTransaction} from './TransactionList.action';

import {networkRequest} from '../../../lib/network';

export default {
  '[TransactionList] GET_TRANSACTIONS__SUBMIT': async (store, next, action) => {
    let config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/transactions`,
    };

    try {
      let res = await networkRequest(config);
      store.dispatch(getTransactions.resolved(res.data.Items));
    } catch(error) {
      console.error(`[APP ERROR] get transactions middleware`, error);
      store.dispatch(getTransactions.rejected(error));
    }
  },
  
  '[TransactionList] SAVE_TRANSACTION__SUBMIT': async (store, next, action) => {
    let config = {
      method: 'PUT',
      url: `${process.env.REACT_APP_API_BASE_URL}/transaction`,
      data: {
        id: action.payload.id,
        hyperlink: action.payload.hyperlink,
        category: action.payload.category,
      }
    };

    try {
      let res = await networkRequest(config);
      store.dispatch(saveTransaction.resolved(res));
    } catch(error) {
      console.error(`[APP ERROR] get transactions middleware`, error);
      store.dispatch(saveTransaction.rejected(error));
    }
  }
}
