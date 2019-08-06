import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Header, Footer} from './components';
import { HomeScreen, CalculatorScreen } from './containers/';

const routes = () => (
    <React.Fragment>
        <Header />
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/calculator" component={CalculatorScreen} />
        </Switch>
        <Footer />
    </React.Fragment>
);

export default withRouter(routes);
