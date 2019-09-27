import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../../services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        authenticationService.getCurrentUser()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);
