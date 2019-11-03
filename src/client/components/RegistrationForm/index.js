import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Form, Checkbox } from 'antd';
import { register, REGISTER_ERROR, REGISTER, REGISTER_SUCCESS } from '../../redux/actions/authActions';
import { authService } from '../../services/AuthService/authService';

export class R extends React.Component {
  state = {
    roles: []
  }

  componentDidMount() {
    authService.getAllRoles().then(({ data }) => this.setState({ roles: data }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newUser) => {
      this.validate(err, newUser);
    });
  };

  validate = (err, newUser) => {
    if (!err) this.props.register(newUser).then(() => this.props.form.resetFields());
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="registration-form">
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
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: "Please input new user's password." }],
          })(<Input type="password" placeholder="New User's password" />)}
        </Form.Item>
        <Form.Item label="Role(s)">
          {getFieldDecorator('roles')(
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
        <Form.Item style={{ marginBottom: '0' }}>
          <Button
            loading={this.props.registerStatus === REGISTER}
            type="primary"
            htmlType="submit"
            className="registration-form__button">
            Register User
          </Button>
        </Form.Item>

        {this.props.registerStatus === REGISTER_ERROR && <div className="error">{this.props.authError}</div>}
        {this.props.registerStatus === REGISTER_SUCCESS && <div>User registered successfully.</div>}
      </Form>
    );
  }
}

export const RegistrationForm = Form.create({ name: 'registration_form' })(R);

const mapStateToProps = ({ authReducer }) => ({
  authError: authReducer.errorMessage,
  registerStatus: authReducer.registerStatus,
});

export default connect(mapStateToProps, { register })(RegistrationForm);
