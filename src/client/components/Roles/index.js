import React, { Component } from 'react';
import { Select, Icon, List, Button, Input } from 'antd';
import { authService } from '../../services/AuthService/authService';
import { permissions } from '../../helpers/permissionHelper';

const { Option } = Select;
const { Search } = Input;

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
        authorities: []
      };

      this.setState({ roles: [...data, creatingRole] });
    });
  }

  handleChange = roleId => this.setState({ currentRoleId: roleId });

  addPermission = permission => {
    const roles = [...this.state.roles];
    const role = roles.find(role => role.id === this.state.currentRoleId);
    role.authorities.push(permission);
    const idx = roles.findIndex(role => role.id === this.state.currentRoleId);
    roles[idx] = role;

    this.setState({ roles });
  }

  removePermission = permission => {
    const roles = [...this.state.roles];
    const role = roles.find(role => role.id === this.state.currentRoleId);
    role.authorities = role.authorities.filter(p => permission !== p);
    const idx = roles.findIndex(role => role.id === this.state.currentRoleId);
    roles[idx] = role;

    this.setState({ roles });
  }

  updateRole = () => {
    const role = this.state.roles.find(role => role.id === this.state.currentRoleId);
    console.log(role);
    authService.updateRole(role);
  }

  createRole = () => {
    let role = this.state.roles.find(role => role.id === this.state.currentRoleId);
    role = { ...role, name: this.state.roleNameText };
    delete role.id;
    console.log(role);
    authService.createRole(role);
  }

  toggleCreating = () => {
    this.setState({
      currentRoleId: this.state.creatingOrEditing === 'creating' ? undefined : -1,
      creatingOrEditing: this.state.creatingOrEditing === 'creating' ? 'editing' : 'creating'
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
            ? <Search
              name="roleNameText"
              placeholder="Enter role name"
              enterButton="Save"
              onSearch={this.createRole}
              value={this.state.roleNameText}
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
      </div>

      {this.state.currentRoleId &&
        <div><br />
          {addedPermissions.length > 0 && <List
            header={<div style={{ fontWeight: 'bold' }}>Permissions:</div>}
            dataSource={addedPermissions}
            renderItem={permission => (
              <List.Item
                actions={[<Icon onClick={() => this.removePermission(permission)} key={permission} type="minus" />]}>
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
                actions={[<Icon onClick={() => this.addPermission(permission)} key={permission} type="plus" />]}>
                {permission}
              </List.Item>
            )}
          />}
          <br />
        </div>
      }

      {![-1, undefined].includes(this.state.currentRoleId) &&
        <Button onClick={this.updateRole} style={{ width: '100%' }}>Save</Button>
      }
    </div>;
  }
};

export default Roles;
