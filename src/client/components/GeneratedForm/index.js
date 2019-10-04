import React from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../../redux/actions/formActions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export class G extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, form) => {
            this.validateFields(err, form);
        });
    };

    validateFields = (err, form) => {
        if (!err) {
            this.props.submitForm(form);
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
                    {getFieldDecorator('programOfStudy', {
                        checked: true,
                    })(
                        <Checkbox>
                            I have submitted an Program of Study form.
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('thesisTitle', {
                        rules: [{ required: true, message: 'Thesis tile required' }],
                    })(
                        <Input
                            placeholder="Thesis Title"
                        />,
                    )}
                </Form.Item>
                PROGRAM COMMITTE MEMBERS: <br />
                (At least two member must be faculty members of Computer Science Department.)
                <Form.Item>
                    {getFieldDecorator('majorProfessor', {
                        rules: [{ required: true, message: 'Major Professor required' }],
                    })(
                        <Input
                            placeholder="Major Professor"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('professor', {
                        rules: [{ required: true, message: 'Professor required' }],
                    })(
                        <Input
                            placeholder="Professor"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('professor', {
                        rules: [{ required: true, message: 'Professor required' }],
                    })(
                        <Input
                            placeholder="Professor"
                        />,
                    )}
                </Form.Item>
                EXAMINATION SCHEDULE:
                <Form.Item>
                    {getFieldDecorator('date', {
                        rules: [{ required: true, message: 'Date required' }],
                    })(
                        <Input
                            placeholder="Date"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('time', {
                        rules: [{ required: true, message: 'Time required' }],
                    })(
                        <Input
                            placeholder="Time"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('location', {
                        rules: [{ required: true, message: 'Location required' }],
                    })(
                        <Input
                            placeholder="Location"
                        />,
                    )}
                </Form.Item>
                APPROVALS(Signature/Date):
                <Form.Item>
                    {getFieldDecorator('majorProfessor', {
                        rules: [{ required: true, message: 'Major Professor required' }],
                    })(
                        <Input
                            placeholder="Major Professor"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('gradProgramRep', {
                        rules: [{ required: true, message: 'Graduate Program Representative required' }],
                    })(
                        <Input
                            placeholder="Graduate Program Representative"
                        />,
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

export default connect(null, { submitForm })(GeneratedForm);
