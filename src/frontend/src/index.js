import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';
import store from './db/store';
import router from './router';
import './stylesheet/main.css';

Sentry.init({
  dsn: 'https://4f280358c701449dbc7c96b043b46b6b@sentry.io/1396365',
});


ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root'),
);
