import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Auth from '../ui/views/Auth';
import AppMenu from '../ui/global/Menu';
import Calendar from '../ui/views/Calendar';
import TransactionList from '../ui/views/TransactionList';
import TransactionUpload from '../ui/views/TransactionUpload';
import routes from './routes.json';

export default (
  <Router basename="/">
    <div className="Router__container">
      <AppMenu />
      <Route exact path={'/'} component={Auth} />
      <Route path={'/calendar'} component={Calendar} />
      <Route path={'/transaction-list'} component={TransactionList} />
      <Route path={'/transaction-upload'} component={TransactionUpload} />
    </div>
  </Router>
);
