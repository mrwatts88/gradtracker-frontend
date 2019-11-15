import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import { PrivateRoute, Header } from './components';
import { connect } from 'react-redux';
import {
  HomeScreen, LogInPage, CreateFormPage, FormsPage, RegistrationPage,
  FormSubmissionsPage, MilestonesPage, RolesPage
} from './containers';
import { Layout, Breadcrumb, Menu, Icon } from 'antd';
import { permissions, hasPermission } from './helpers/permissionHelper';

import 'antd/dist/antd.css';
import './less/main.less';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Routes extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header currentUser={this.props.currentUser} path={pathname} />

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
                defaultOpenKeys={[]}
                selectedKeys={[pathname]}
              >
                <SubMenu
                  key="forms"
                  title={
                    <span>
                      <Icon type="file-text" />
                      <span>Forms</span>
                    </span>
                  }
                >
                  {hasPermission(this.props.currentUser, permissions.CREATE_FORM_DEF) &&
                    <Menu.Item key="/createform">
                      <Link to="/createform">Create a Form</Link>
                    </Menu.Item>
                  }
                  <Menu.Item key="/forms">
                    <Link to="/forms">Submit a Form</Link>
                  </Menu.Item>
                  <Menu.Item key="/formsubmissions">
                    <Link to="/formsubmissions">View Submissions</Link>
                  </Menu.Item>
                </SubMenu>
                {hasPermission(this.props.currentUser, permissions.CREATE_ROLE) &&
                  <SubMenu
                    key="admin"
                    title={
                      <span>
                        <Icon type="user" />
                        <span>Admin</span>
                      </span>
                    }
                  >
                    <Menu.Item key="/milestones">
                      <Link to="/milestones">Milestones</Link>
                    </Menu.Item>
                    <Menu.Item key="/roles">
                      <Link to="/roles">Roles</Link>
                    </Menu.Item>
                  </SubMenu>
                }
              </Menu>
            </Sider>
          )}

          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Switch>
                <PrivateRoute exact path="/" component={HomeScreen} />
                <PrivateRoute exact path="/createform" permissions={[permissions.CREATE_FORM_DEF]} component={CreateFormPage} />
                <PrivateRoute exact path="/forms" component={FormsPage} />
                <PrivateRoute exact path="/registration" permissions={[permissions.CREATE_USER]} component={RegistrationPage} />
                <PrivateRoute exact path="/formsubmissions" component={FormSubmissionsPage} />
                <PrivateRoute exact path="/milestones" component={MilestonesPage} />
                <PrivateRoute exact path="/roles" component={RolesPage} />
                <Route exact path="/login" component={LogInPage} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({ currentUser: authReducer.currentUser });

export default withRouter(connect(mapStateToProps)(Routes));
