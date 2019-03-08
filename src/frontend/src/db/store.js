import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import middlewareRouter from './middleware';
import ErrorReducer from './Global/Error/Error.reducer';
import AuthReducer from '../ui/views/Auth/Auth.reducer';
import CalendarReducer from '../ui/views/Calendar/Calendar.reducer';
import TransactionListReducer from '../ui/views/TransactionList/TransactionList.reducer';
import TransactionUploadReducer from '../ui/views/TransactionUpload/TransactionUpload.reducer';
import InvoicesReducer from '../ui/views/Invoices/Invoices.reducer';
import CreateInvoiceReducer from '../ui/views/CreateInvoice/CreateInvoice.reducer';
import MenuReducer from '../ui/global/Menu/Menu.reducer';
import SpinnerReducer from '../ui/global/Spinner/Spinner.reducer';
import ProfileReducer from '../ui/views/Profile/Profile.reducer';
import AnalyticsReducer from '../ui/views/Analytics/Analytics.reducer';
import DateRangeToastReducer from '../ui/global/DateRangeToast/DateRangeToast.reducer';


const customMiddleWare = store => next => (action) => {
  middlewareRouter(store, next, action);
};

// Combine Reducers
const reducers = combineReducers({
  ErrorReducer,
  AuthReducer,
  TransactionListReducer,
  TransactionUploadReducer,
  MenuReducer,
  SpinnerReducer,
  CalendarReducer,
  InvoicesReducer,
  CreateInvoiceReducer,
  ProfileReducer,
  AnalyticsReducer,
  DateRangeToastReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const store = createStore(
  reducers,
  applyMiddleware(customMiddleWare, logger),
);

export default store;
