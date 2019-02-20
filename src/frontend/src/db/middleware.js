import ErrorMiddleware from './Global/Error/Error.middleware';
import AuthMiddleware from '../ui/views/Auth/Auth.middleware';
import CalendarMiddleware from '../ui/views/Calendar/Calendar.middleware';
import TransactionListMiddleware from '../ui/views/TransactionList/TransactionList.middleware';
import TransactionUploadMiddleware from '../ui/views/TransactionUpload/TransactionUpload.middleware';
import InvoicesMiddleware from '../ui/views/Invoices/Invoices.middleware';
import CreateInvoiceMiddleware from '../ui/views/CreateInvoice/CreateInvoice.middleware';
import ProfileMiddleware from '../ui/views/Profile/Profile.middleware';

const middlewares = {
  ...AuthMiddleware,
  ...TransactionListMiddleware,
  ...TransactionUploadMiddleware,
  ...CalendarMiddleware,
  ...InvoicesMiddleware,
  ...CreateInvoiceMiddleware,
  ...ErrorMiddleware,
  ...ProfileMiddleware,
};

export default (store, next, action) => {
  const middlewareMode = action.payload
    ? action.payload.middlewareMode
    : false;

  if (!middlewareMode || middlewareMode === 'first') {
    next(action);
  }

  const middleware = middlewares[action.type];

  if (middleware) {
    try {
      middleware(store, next, action);
    } catch (e) {
      throw new Error(`[HYPERMETRO] ${e}`);
    }
  }

  if (middlewareMode === 'last') {
    next(action);
  }
};
