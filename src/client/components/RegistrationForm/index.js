import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Icon, Form } from 'antd';
import { register } from '../../redux/actions/authActions';

export class R extends React.Component {
  handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, { email }) => {
          this.validate(err, email);
      });
  };

  validate = (err, email) => {
      if (!err) {
          this.props.register(email);
      } else {
          console.log(err);
      }
  };

  render() {
      const { getFieldDecorator } = this.props.form;
      return (
          <Form onSubmit={this.handleSubmit} className="registration-form">
              <Form.Item>
                  {getFieldDecorator('email', {
                      rules: [{ required: true, message: "Please input new user's email." }]
                  })(<Input prefix={<Icon type="email" />} placeholder="New User's Email" />)}
              </Form.Item>
              <Form.Item style={{ marginBottom: '0' }}>
                  <Button type="primary" htmlType="submit" className="registration-form__button">
            Register User
                  </Button>
              </Form.Item>
              {this.props.authError && <div>{this.props.authError}</div>}
          </Form>
      );
  }
}

export const RegistrationForm = Form.create({ name: 'registration_form' })(R);

const mapStateToProps = ({ authReducer }) => ({
    authError: authReducer.errorMessage
});

export default connect(
    mapStateToProps,
    { register }
)(RegistrationForm);
