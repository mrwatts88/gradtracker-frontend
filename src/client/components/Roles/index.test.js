import React from 'react';
import { Roles } from '.';
import { shallow } from 'enzyme';

describe('LogInForm', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Roles />);
  });

  it('handleChange', () => {
    const roleId = 1;
    wrapper = shallow(<Roles />);
    wrapper.instance().clearStatus = jest.fn();

    wrapper.setState({
      permissions: ['CREATE_ROLE'],
      roles: [{ id: 1, authorities: ['CREATE_ROLE', '2'] }, { id: 2, authorities: ['3', '4'] }],
      currentRoleId: 1
    });

    wrapper.instance().handleChange(roleId);
  });

  it('addPermission', () => {
    const roleId = 1;
    wrapper = shallow(<Roles />);
    wrapper.instance().clearStatus = jest.fn();

    wrapper.setState({
      permissions: ['CREATE_ROLE'],
      roles: [{ id: 1, authorities: ['CREATE_ROLE', '2'] }, { id: 2, authorities: ['3', '4'] }],
      currentRoleId: 1
    });

    wrapper.instance().addPermission(roleId);
  });

  it('removePermission', () => {
    const roleId = 1;
    wrapper = shallow(<Roles />);
    wrapper.instance().clearStatus = jest.fn();

    wrapper.setState({
      permissions: ['CREATE_ROLE'],
      roles: [{ id: 1, authorities: ['CREATE_ROLE', '2'] }, { id: 2, authorities: ['3', '4'] }],
      currentRoleId: 1
    });

    wrapper.instance().removePermission(roleId);
  });

  it('clearStatus', () => {
    const props = {
      dispatchType: jest.fn()
    };

    wrapper = shallow(<Roles {...props} />);

    wrapper.setState({
      permissions: ['CREATE_ROLE'],
      roles: [{ id: 1, authorities: ['CREATE_ROLE', '2'] }, { id: 2, authorities: ['3', '4'] }],
      currentRoleId: 1
    });

    wrapper.instance().clearStatus();
  });

  it('updateRole', () => {
    const props = {
      updateRole: jest.fn()
    };

    wrapper = shallow(<Roles {...props} />);
    wrapper.instance().updateRole();
  });

  it('createRole', () => {
    const props = {
      createRole: jest.fn()
    };

    wrapper = shallow(<Roles {...props} />);
    wrapper.instance().createRole();
  });

  it('toggleCreating', () => {
    wrapper = shallow(<Roles />);
    wrapper.instance().clearStatus = jest.fn();

    wrapper.setState({
      permissions: ['CREATE_ROLE'],
      roles: [{ id: 1, authorities: ['CREATE_ROLE', '2'] }, { id: -1, authorities: ['3', '4'] }],
      currentRoleId: 1
    });

    wrapper.instance().toggleCreating();
  });

  it('toggleCreating', () => {
    wrapper = shallow(<Roles />);
    wrapper.instance().handleInputChange({ target: { name: 'testName', value: 'testValue' } });
  });
});
