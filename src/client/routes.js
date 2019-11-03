import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { PrivateRoute, Header } from './components';
import { connect } from 'react-redux';
import { HomeScreen, LogInPage, CreateFormPage, FormsPage, RegistrationPage, FormSubmissionsPage } from './containers';
import { clearStatuses } from './redux/actions/commonActions';
import { Layout, Breadcrumb, Menu, Icon } from 'antd';

import 'antd/dist/antd.css';
import './less/main.less';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Routes extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.location.pathname !== this.props.location.pathname) this.props.clearStatuses(prevProps.location.pathname);
  // }

  render() {
    const { pathname } = this.props.location;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header path={pathname} />

        <Layout>
          {pathname !== '/login' && (
            <Sider
              style={{ background: '#fff' }}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <Menu
                style={{ height: '100%', borderRight: 0 }}
                mode="inline"
                defaultOpenKeys={['forms']}
                selectedKeys={[pathname]}
              >
                <SubMenu
                  key="forms"
                  title={
                    <span>
                      <Icon type="laptop" />
                      <span>Forms</span>
                    </span>
                  }
                >
                  <Menu.Item key="/createform">
                    <Link to="/createform">Create a Form</Link>
                  </Menu.Item>
                  <Menu.Item key="/forms">
                    <Link to="/forms">Submit a Form</Link>
                  </Menu.Item>
                  <Menu.Item key="/formsubmissions">
                    <Link to="/formsubmissions">View Submissions</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          )}

          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <PrivateRoute exact path="/" component={HomeScreen} />
                <PrivateRoute exact path="/createform" component={CreateFormPage} />
                <PrivateRoute exact path="/forms" component={FormsPage} />
                <PrivateRoute exact path="/registration" component={RegistrationPage} />
                <PrivateRoute exact path="/formsubmissions" component={FormSubmissionsPage} />
                <Route exact path="/login" component={LogInPage} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(
  connect(
    null,
    { clearStatuses }
  )(Routes)
);
