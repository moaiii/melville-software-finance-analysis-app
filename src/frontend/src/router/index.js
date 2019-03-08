/* eslint-disable */
import React from 'react';
import { Route, Router } from 'react-router-dom';
import Auth from '../ui/views/Auth';
import AppMenu from '../ui/global/Menu';
import Spinner from '../ui/global/Spinner';
import DateRangeToast from '../ui/global/DateRangeToast';
import Calendar from '../ui/views/Calendar';
import TransactionList from '../ui/views/TransactionList';
import TransactionUpload from '../ui/views/TransactionUpload';
import Invoices from '../ui/views/Invoices';
import Analytics from '../ui/views/Analytics';
import CreateInvoice from '../ui/views/CreateInvoice';
import Profile from '../ui/views/Profile';
import history from "./history";

export default (
  <Router basename="/" history={history}>
    <div className="App__root">
      <Spinner />
      <AppMenu />
      <DateRangeToast />
      <Route exact path={'/'} component={Auth} />
      <Route exact path={'/calendar'} component={Calendar} />
      <Route exact path={'/transaction-list'} component={TransactionList} />
      <Route exact path={'/transaction-upload'} component={TransactionUpload} />
      <Route exact path={'/invoices'} component={Invoices} />
      <Route exact path={'/create-invoice'} component={CreateInvoice} />
      <Route exact path={'/profile'} component={Profile} />
      <Route exact path={'/analytics'} component={Analytics} />
    </div>
  </Router>
);
