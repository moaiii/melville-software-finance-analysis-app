// @flow
import * as actions from './Menu.action';
import history from '../../../router/history';

export default {
  '[Menu] CHANGE_ROUTE': async (store, next, action) => {
    /**
     * Log route here... ?
     */
    const route = action.payload;
    console.log(action.payload);
    history.push(route);
  },
};
