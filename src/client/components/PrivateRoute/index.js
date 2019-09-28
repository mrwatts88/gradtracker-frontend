import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route {...rest} render={props => (
        currentUser
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

const mapStateToProps = state => ({ currentUser: state.userReducer.currentUser });
export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
