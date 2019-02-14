import AuthMiddleware from '../ui/views/Auth/Auth.middleware';
import CalendarMiddleware from '../ui/views/Calendar/Calendar.middleware';
import TransactionListMiddleware from '../ui/views/TransactionList/TransactionList.middleware';
import TransactionUploadMiddleware from '../ui/views/TransactionUpload/TransactionUpload.middleware';

const middlewares = {
  ...AuthMiddleware,
  ...TransactionListMiddleware,
  ...TransactionUploadMiddleware,
  ...CalendarMiddleware,
};

export default (store, next, action) => {
  const middleware = middlewares[action.type];

  if (middleware) {
    middleware(store, next, action);
  }

  next(action);
};
