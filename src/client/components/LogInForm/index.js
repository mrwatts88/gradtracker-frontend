import React from 'react';
import { connect } from 'react-redux';
import { authenticate, AUTHENTICATION_ERROR, CLEAR_AUTHENTICATE_STATUS } from '../../redux/actions/authActions';
import { Form, Icon, Input, Button } from 'antd';
import { dispatchType } from '../../redux/actions/commonActions';

export class L extends React.Component {
  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_AUTHENTICATE_STATUS);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatchType(CLEAR_AUTHENTICATE_STATUS);
    this.props.form.validateFields((err, { email, password }) => {
      this.validateEmailPassword(err, email, password);
    });
  };

  validateEmailPassword = (err, email, password) => {
    if (!err) this.props.authenticate(email, password);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email.' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password.' }],
          })(<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item style={{ marginBottom: '0' }}>
          <Button type="primary" htmlType="submit" className="login-form__button">
            Log in
          </Button>
        </Form.Item>
        {this.props.authenticateStatus === AUTHENTICATION_ERROR && <div className="error">{this.props.authError}</div>}
      </Form>
    );
  }
}

export const LogInForm = Form.create({ name: 'login_form' })(L);

const mapStateToProps = ({ authReducer }) => ({
  authError: authReducer.errorMessage,
  authenticateStatus: authReducer.authenticateStatus,
});

export default connect(mapStateToProps, { authenticate, dispatchType })(LogInForm);
