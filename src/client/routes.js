import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { PrivateRoute, Header } from './components';
import { connect } from 'react-redux';
import { HomeScreen, LogInPage, CreateFormPage, FormsPage, RegistrationPage } from './containers';
import { clearErrors } from './redux/actions/commonActions';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './less/main.less';

const { Content, Footer } = Layout;

class Routes extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname != this.props.location.pathname) this.props.clearErrors();
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {this.props.location.pathname !== '/login' && <Header path={this.props.location.pathname} />}
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <PrivateRoute exact path="/" component={HomeScreen} />
              <PrivateRoute exact path="/createform" component={CreateFormPage} />
              <PrivateRoute exact path="/forms" component={FormsPage} />
              <PrivateRoute exact path="/registration" component={RegistrationPage} />
              <Route exact path="/login" component={LogInPage} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>University of Wisconsin-Milwaukee ©2019 Created by CS595</Footer>
      </Layout>
    );
  }
}

export default withRouter(
  connect(
    null,
    { clearErrors }
  )(Routes)
);
