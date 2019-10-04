import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Header, Footer, ShowError, PrivateRoute } from './components';
import { connect } from 'react-redux';
import { HomeScreen, LogInPage } from './containers';

const routes = props => (
    <React.Fragment>
        <Header />
        <ShowError {...props} />
        <Switch>
            <PrivateRoute exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LogInPage} />
        </Switch>
        <Footer />
    </React.Fragment>
);

const mapStateToProps = state => ({
    error: state.errorReducer.error
});

export default withRouter(connect(mapStateToProps)(routes));
