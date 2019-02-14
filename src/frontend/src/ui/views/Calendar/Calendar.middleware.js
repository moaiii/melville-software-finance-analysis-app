// @flow
// import * as actions from './Calendar.action';

export default {
  '[Calendar] SET_DATA': async (store, next, action) => {
    const { viewMetric } = store.getState().CalendarReducer;

    action.payload = store.getState()
      .TransactionListReducer.transactions
      .map((transaction) => {
        const reverseDay = transaction.Date
          .split('/')
          .reverse()
          .join('-');

        return {
          day: reverseDay,
          value: parseInt(transaction[`${viewMetric}`]),
        }
      });
  }
};
