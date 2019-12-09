import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, permissions, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!currentUser) {
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      // if (!hasAnyPermission(currentUser, permissions)) {
      //   // role not authorised so redirect to home page
      //   return <Redirect to={{ pathname: '/' }} />;
      // }
      return <Component {...props} />;
    }
    }
  />
);

const mapStateToProps = state => ({ currentUser: state.authReducer.currentUser });
export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};
