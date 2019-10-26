import React from 'react';
import { Form, Input } from 'antd';

class S extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, form) => {
      this.validateFields(err, form);
    });
  };

  validateFields = (err, form) => {
    if (!err) {
      this.props.postForm(form);
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="submission-form">
          {this.props.submission.fields
            .sort((a, b) => a.fieldIndex - b.fieldIndex)
            .map(field => {
              return this.props.currentlyEditing ? (
                <div key={field.id}>
                  <div style={{ fontWeight: 'bold' }}>{field.label}</div>
                  <Form.Item key={field.id}>
                    {getFieldDecorator(String(field.id), {
                      initialValue: field.data,
                      rules: [{ required: true, message: `${field.label} required.` }],
                    })(<Input />)}
                  </Form.Item>
                  <br />
                </div>
              ) : (
                <div key={field.id}>
                  <div style={{ fontWeight: 'bold' }}>{field.label}</div>
                  <div>{field.data}</div>
                  <br />
                </div>
              );
            })}
        </Form>
      </div>
    );
  }
}

export const SubmissionForm = Form.create({ name: 'submission_form' })(S);
