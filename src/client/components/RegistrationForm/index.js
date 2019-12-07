import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Form, Checkbox, Icon } from 'antd';
import {
  register,
  REGISTER_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  CLEAR_REGISTER_STATUS
} from '../../redux/actions/authActions';
import { authService } from '../../services/AuthService/authService';
import { dispatchType } from '../../redux/actions/commonActions';

export class R extends React.Component {
  state = {
    roles: [],
    fetchingRoles: false,
  }

  componentDidMount() {
    this.setState({ fetchingRoles: true });
    authService.getAllRoles().then(({ data }) => this.setState({ roles: data, fetchingRoles: false }));
  }

  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_REGISTER_STATUS);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatchType(CLEAR_REGISTER_STATUS);
    this.props.form.validateFields((err, newUser) => {
      this.register(err, newUser);
    });
  };

  register = (err, newUser) => {
    if (!err) this.props.register({ ...newUser, password: 'password' }).then(() => this.props.form.resetFields());
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="registration-form" >
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: "Please input new user's email." }],
          })(<Input placeholder="New User's Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: "Please input new user's first name." }],
          })(<Input placeholder="New User's first name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: "Please input new user's last name." }],
          })(<Input placeholder="New User's last name" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('pantherId', {
            rules: [{ required: true, message: "Please input new user's pantherId." }],
          })(<Input placeholder="New User's pantherId" />)}
        </Form.Item>
        {this.state.fetchingRoles
          ? <Icon style={{ fontSize: '40px', width: '100%', marginBottom: '15px' }} spin type="loading-3-quarters" />
          : <Form.Item label="Role(s)">
            {getFieldDecorator('roleNames', {
              rules: [{ required: true, message: 'Please select at least one role.' }],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                {this.state.roles.map(({ name }) => {
                  return <div key={name}>
                    <Checkbox value={name} defaultChecked={false} >{name}</Checkbox>
                    <br />
                  </div>;
                })}
              </Checkbox.Group>
            )}
          </Form.Item>
        }
        <Form.Item style={{ marginBottom: '0' }}>
          <Button
            loading={this.props.registerStatus === REGISTER}
            disabled={this.state.fetchingRoles}
            type="primary"
            htmlType="submit"
            className="registration-form__button">
            Register User
          </Button>
        </Form.Item>
        <div style={{ color: 'green', textAlign: 'center' }}>
          {this.props.registerStatus === REGISTER_ERROR && <span className='error'>{this.props.authError}</span>}
          {this.props.registerStatus === REGISTER_SUCCESS && <span className='success'>User registered successfully.</span>}
        </div>
      </Form >
    );
  }
}

export const RegistrationForm = Form.create({ name: 'registration_form' })(R);

const mapStateToProps = ({ authReducer }) => ({
  authError: authReducer.errorMessage,
  registerStatus: authReducer.registerStatus,
});

export default connect(mapStateToProps, { register, dispatchType })(RegistrationForm);
