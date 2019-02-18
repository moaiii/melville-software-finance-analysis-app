import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import middlewareRouter from './middleware';

import AuthReducer from '../ui/views/Auth/Auth.reducer';
import CalendarReducer from '../ui/views/Calendar/Calendar.reducer';
import TransactionListReducer from '../ui/views/TransactionList/TransactionList.reducer';
import TransactionUploadReducer from '../ui/views/TransactionUpload/TransactionUpload.reducer';
import InvoicesReducer from '../ui/views/Invoices/Invoices.reducer';

const customMiddleWare = store => next => (action) => {
  middlewareRouter(store, next, action);
};

// Combine Reducers
const reducers = combineReducers({
  AuthReducer,
  TransactionListReducer,
  TransactionUploadReducer,
  CalendarReducer,
  InvoicesReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(reducers, applyMiddleware(customMiddleWare, logger));

export default store;
