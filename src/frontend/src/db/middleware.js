import AuthMiddleware from '../ui/views/Auth/Auth.middleware';
import TransactionListMiddleware from '../ui/views/TransactionList/TransactionList.middleware';
import TransactionUploadMiddleware from '../ui/views/TransactionUpload/TransactionUpload.middleware';

const middlewares = {
  ...AuthMiddleware,
  ...TransactionListMiddleware,
  ...TransactionUploadMiddleware,
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
