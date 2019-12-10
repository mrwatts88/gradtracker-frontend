import React, { Component } from 'react';
import { Select, Icon, List, Button, Input } from 'antd';
import {
  updateRole,
  UPDATE_ROLE_ERROR,
  UPDATE_ROLE_SUCCESS,
  CLEAR_UPDATE_ROLE_STATUS,
  createRole,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_SUCCESS,
  CLEAR_CREATE_ROLE_STATUS,
} from '../../redux/actions/authActions';
import { dispatchType } from '../../redux/actions/commonActions';
import { authService } from '../../services/AuthService/authService';
import { permissions } from '../../helpers/permissionHelper';
import { connect } from 'react-redux';

const { Option } = Select;

class Roles extends Component {
  state = {
    currentRoleId: undefined,
    roles: [],
    creatingOrEditing: 'editing',
    roleNameText: ''
  }

  componentDidMount() {
    authService.getAllRoles().then(({ data }) => {
      const creatingRole = {
        id: -1,
        name: '',
        description: 'new role',
        authorities: [],
        loading: false,
      };

      this.setState({ roles: [...data, creatingRole] });
    });
  }

  handleChange = roleId => {
    this.setState({ currentRoleId: roleId });
    this.clearStatus();
  }

  addPermission = permission => {
    this.clearStatus();
    const roles = [...this.state.roles];
    const role = roles.find(r => r.id === this.state.currentRoleId);
    role.authorities.push(permission);
    const idx = roles.findIndex(r => r.id === this.state.currentRoleId);
    roles[idx] = role;

    this.setState({ roles });
  }

  removePermission = permission => {
    this.clearStatus();
    const roles = [...this.state.roles];
    const role = roles.find(r => r.id === this.state.currentRoleId);
    role.authorities = role.authorities.filter(p => permission !== p);
    const idx = roles.findIndex(r => r.id === this.state.currentRoleId);
    roles[idx] = role;

    this.setState({ roles });
  }

  clearStatus = () => {
    this.props.dispatchType(CLEAR_UPDATE_ROLE_STATUS);
    this.props.dispatchType(CLEAR_CREATE_ROLE_STATUS);
  }

  updateRole = () => {
    const role = this.state.roles.find(r => r.id === this.state.currentRoleId);
    this.props.updateRole(role);
  }

  createRole = () => {
    let role = this.state.roles.find(r => r.id === this.state.currentRoleId);
    role = { ...role, name: this.state.roleNameText };
    delete role.id;
    this.props.createRole(role);
  }

  toggleCreating = () => {
    this.setState({
      currentRoleId: this.state.creatingOrEditing === 'creating' ? undefined : -1,
      creatingOrEditing: this.state.creatingOrEditing === 'creating' ? 'editing' : 'creating'
    });
    this.clearStatus();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  keyPressed(event) {
    if (event.key === 'Enter') {
      this.createRole();
    }
  }

  render() {
    const addedPermissions = !this.state.currentRoleId
      ? [] : (this.state.roles.find(role => role.id === this.state.currentRoleId))
        .authorities.filter(x => Object.keys(permissions).includes(x)).sort();

    const removedPermissions = !this.state.currentRoleId
      ? [] : (Object.keys(permissions).filter(x => !this.state.roles.find(role => role.id === this.state.currentRoleId)
        .authorities.includes(x))).sort();

    return <div>
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <Select
          onChange={this.toggleCreating}
          value={this.state.creatingOrEditing}
          style={{ marginRight: '10px' }}>
          <Option value="editing">Edit Role&nbsp;</Option>
          <Option value="creating">Create Role&nbsp;</Option>
        </Select>
        {
          this.state.creatingOrEditing === 'creating'
            ? <Input
              name="roleNameText"
              placeholder="Enter role name"
              value={this.state.roleNameText}
              onKeyPress={this.keyPressed.bind(this)}
              onChange={this.handleInputChange} /> : (
              <Select
                style={{ width: '100%' }}
                placeholder="Select a role"
                onChange={this.handleChange}
              >
                {(this.state.roles).filter(r => r.id !== -1).map(role => (
                  <Option key={role.id} value={role.id}>
                    {role.name}
                  </Option>
                ))}
              </Select>
            )
        }
        {
          this.state.creatingOrEditing === 'creating'
            ? <Button onClick={this.createRole} style={{ marginLeft: '10px' }}>Create</Button>
            : <Button onClick={this.updateRole} style={{ marginLeft: '10px' }}>Update</Button>
        }
      </div>

      <div style={{ color: 'green', textAlign: 'center' }}>
        {this.props.createRoleStatus === CREATE_ROLE_ERROR && this.props.createRoleError}
        {this.props.createRoleStatus === CREATE_ROLE_SUCCESS && 'Role created successfully.'}
        {this.props.updateRoleStatus === UPDATE_ROLE_ERROR && this.props.updateRoleError}
        {this.props.updateRoleStatus === UPDATE_ROLE_SUCCESS && 'Role updated successfully.'}
      </div>

      {this.state.currentRoleId &&
        <div><br />
          {addedPermissions.length > 0 && <List
            header={<div style={{ fontWeight: 'bold' }}>Permissions:</div>}
            dataSource={addedPermissions}
            renderItem={permission => (
              <List.Item
                actions={[<Icon
                  style={{ color: 'red' }}
                  onClick={() => this.removePermission(permission)}
                  key={permission}
                  type="minus" />]}>
                {permission}
              </List.Item>
            )}
          />}
          <br />
        </div>
      }

      {this.state.currentRoleId &&
        <div>
          {removedPermissions.length > 0 && <List
            header={<div style={{ fontWeight: 'bold' }}>Add additional permissions:</div>}
            dataSource={removedPermissions}
            renderItem={permission => (
              <List.Item
                actions={[<Icon
                  style={{ color: 'green' }}
                  onClick={() => this.addPermission(permission)}
                  key={permission}
                  type="plus" />]}>
                {permission}
              </List.Item>
            )}
          />}
          <br />
        </div>
      }
    </div>;
  }
}

const mapStateToProps = ({ authReducer }) => ({
  createRoleError: authReducer.errorMessage,
  createRoleStatus: authReducer.createRoleStatus,
  updateRoleError: authReducer.errorMessage,
  updateRoleStatus: authReducer.updateRoleStatus
});

export default connect(mapStateToProps, { createRole, updateRole, dispatchType })(Roles);
