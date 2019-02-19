// @flow
import * as Sentry from '@sentry/browser';


export default {
  '[Error] LOG_ERROR': async (store, next, action) => {
    console.error('[HYPER METRO ERROR]', action.payload);
    Sentry.withScope((scope) => {
      // Object.keys(errorInfo).forEach((key) => {
      //   scope.setExtra(key, errorInfo[key]);
      // });
      Sentry.captureException(action.payload);
    });
  },
};
