import { applyMiddleware, createStore } from 'redux';

import AuthReducer from '../ui/views/Auth/Auth.reducer';
import TransactionListReducer from '../ui/views/TransactionList/TransactionList.reducer';
import TransactionUploadReducer from '../ui/views/TransactionUpload/TransactionUpload.reducer';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import middlewareRouter from './middleware';

const customMiddleWare = store => next => (action) => {
  middlewareRouter(store, next, action);
};

// Combine Reducers
const reducers = combineReducers({
  AuthReducer,
  TransactionListReducer,
  TransactionUploadReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducers, applyMiddleware(customMiddleWare, logger));

export default store;
