'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes.js';
import configureStore, { history } from './store';
import { AUTHENTICATE_SUCCESS } from './redux/actions/authActions';
import * as JWT from 'jwt-decode';
import { permissions } from './helpers/permissionHelper';

const store = configureStore();

const userToken = localStorage.getItem('userToken');

if (userToken) {
  const decodedToken = JWT(userToken);
  const user = JSON.parse(decodedToken.sub);
  user.authorities.push(permissions.APPROVE_FORM_REQUEST);
  // store.dispatch({ type: AUTHENTICATE_SUCCESS, payload: { user: JSON.parse(decodedToken.sub) } });
  store.dispatch(
    {
      type: AUTHENTICATE_SUCCESS,
      payload: { user },
    }
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('origin')
);
