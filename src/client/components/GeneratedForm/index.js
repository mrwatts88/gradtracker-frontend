import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/authActions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export class G extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, { email, password }) => {
            this.validateEmailPassword(err, email, password);
        });
    };

    validateEmailPassword = (err, email, password) => {
        if (!err) {
            this.props.logIn(email, password);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="generated-form">
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Name required' }],
                    })(
                        <Input
                            placeholder="Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('studentId', {
                        rules: [{ required: true, message: 'Student ID required' }],
                    })(
                        <Input
                            placeholder="Student ID"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Email required' }],
                    })(
                        <Input
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Phone number required' }],
                    })(
                        <Input
                            placeholder="Phone"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('uGradReqAssessComplete', {
                        checked: true,
                    })(
                        <Checkbox>
                            I have submitted an Undergraduate Requirement Assessment form.
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="generated-form__button">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const GeneratedForm = Form.create({ name: 'generated_form' })(G);

export default connect(null, { logIn })(GeneratedForm);
