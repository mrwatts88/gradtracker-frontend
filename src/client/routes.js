import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomeScreen } from './containers/';

const routes = () => (
    <React.Fragment>
        <Header />
        <Switch>
            <Route exact path="/" component={HomeScreen} />
        </Switch>
        <Footer />
    </React.Fragment>
);

export default withRouter(routes);
