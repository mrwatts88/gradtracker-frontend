'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes.js';
import configureStore, { history } from './store';
import { AUTHENTICATE } from './redux/actions/authActions';
import * as JWT from 'jwt-decode';

import './sass/main.scss';
import 'antd/dist/antd.css';

const store = configureStore();

const userToken = localStorage.getItem('userToken');

if (userToken) {
    const decodedToken = JWT(userToken);
    store.dispatch({ type: AUTHENTICATE, payload: { username: decodedToken.sub } });
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('origin')
);
