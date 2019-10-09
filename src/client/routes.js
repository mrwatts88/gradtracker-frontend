import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ShowError, PrivateRoute, Header } from './components';
import { connect } from 'react-redux';
import { HomeScreen, LogInPage, CreateFormPage, FormsPage } from './containers';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './less/main.less';

const { Content, Footer } = Layout;

const routes = props => (
    <Layout style={{ minHeight: '100vh' }}>
        {props.location.pathname !== '/login' && <Header path={props.location.pathname} />}
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <ShowError {...props} />
                <Switch>
                    <PrivateRoute exact path="/" component={HomeScreen} />
                    <PrivateRoute exact path="/createform" component={CreateFormPage} />
                    <PrivateRoute exact path="/forms" component={FormsPage} />
                    <Route exact path="/login" component={LogInPage} />
                </Switch>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>University of Wisconsin-Milwaukee ©2019 Created by CS595</Footer>
    </Layout>
);

const mapStateToProps = state => ({
    error: state.errorReducer.error
});

export default withRouter(connect(mapStateToProps)(routes));
