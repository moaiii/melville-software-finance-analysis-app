import { Route, HashRouter as Router } from "react-router-dom";

import Auth from '../ui/views/Auth';
import React from "react";
import TransactionList from '../ui/views/TransactionList';
import TransactionUpload from '../ui/views/TransactionUpload';
import routes from './routes.json';

export default(
  <Router basename="/">
    <div className="Router__container">
      <Route 
          exact path={'/'}
          component={Auth}/>
      <Route 
          exact path={'/transaction-list'}
          component={TransactionList}/>
      <Route 
          exact path={'/transaction-upload'}
          component={TransactionUpload}/>
    </div>
  </Router>
)
