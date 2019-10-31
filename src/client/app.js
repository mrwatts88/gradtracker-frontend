'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes.js';
import configureStore, { history } from './store';
import { AUTHENTICATE_SUCCESS } from './redux/actions/authActions';
import * as JWT from 'jwt-decode';

const store = configureStore();

const userToken = localStorage.getItem('userToken');

if (userToken) {
  const decodedToken = JWT(userToken);
  store.dispatch({ type: AUTHENTICATE_SUCCESS, payload: { username: decodedToken.sub, firstName: decodedToken['first name'], lastName: decodedToken['last name'], id: decodedToken.id, email: decodedToken.email } });
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('origin')
);
