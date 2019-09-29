import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';
import { Form, Icon, Input, Button } from 'antd';

export class SignIn extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, { email, password }) => {
            if (!err) {
                this.props.signIn(email, password);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="signin-form">
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your email.' }],
                    })(
                        <Input
                            prefix={<Icon type="mail" />}
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password.' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="signin-form__button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const WrappedSignIn = Form.create({ name: 'sign_in' })(SignIn);

export default connect(null, { signIn })(WrappedSignIn);
