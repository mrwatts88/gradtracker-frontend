import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { ShowError, PrivateRoute } from './components';
import { connect } from 'react-redux';
import { HomeScreen, LogInPage, CreateFormPage } from './containers';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './less/main.less';

const { Header, Content, Footer } = Layout;

const routes = props => (
    <Layout style={{ minHeight: '100vh' }}>
        <Header>
            <div className="logo" />
            <span id="nav">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="/">
                        <Link to="/" >HOME</Link>
                    </Menu.Item>
                    <Menu.Item key="/createform">
                        <Link to="/createform" >CREATE FORM</Link>
                    </Menu.Item>
                    <Menu.Item style={{ float: 'right' }} key="/login">
                        <Link to="/login" >LOG IN</Link>
                    </Menu.Item>
                </Menu>
            </span>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <ShowError {...props} />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <PrivateRoute exact path="/createform" component={CreateFormPage} />
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
