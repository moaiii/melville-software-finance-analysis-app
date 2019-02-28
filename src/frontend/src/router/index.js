/* eslint-disable */
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Auth from '../ui/views/Auth';
import AppMenu from '../ui/global/Menu';
import Calendar from '../ui/views/Calendar';
import TransactionList from '../ui/views/TransactionList';
import TransactionUpload from '../ui/views/TransactionUpload';
import Invoices from '../ui/views/Invoices';
import CreateInvoice from '../ui/views/CreateInvoice';
import Profile from '../ui/views/Profile';


export default (
  <Router basename="/">
    <div className="Router__container">
      <AppMenu />
      <Route exact path={'/'} component={Auth} />
      <Route path={'/calendar'} component={Calendar} />
      <Route path={'/transaction-list'} component={TransactionList} />
      <Route path={'/transaction-upload'} component={TransactionUpload} />
      <Route path={'/invoices'} component={Invoices} />
      <Route path={'/create-invoice'} component={CreateInvoice} />
      <Route path={'/profile'} component={Profile} />
    </div>
  </Router>
);
