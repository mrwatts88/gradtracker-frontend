import React from 'react';
import { Form, Input, Collapse, Icon } from 'antd';
import moment from 'moment';

export default Form.create({ name: 'submission_form' })(
  class S extends React.Component {
    renderEdit = submission => {
      return this.props.currentlyEditing ? (
        <span style={{ float: 'right' }}>
          <Icon
            type="save"
            style={{ color: 'green' }}
            onClick={event => {
              event.stopPropagation();
              this.handleSubmit(event);
            }}
          />
          &nbsp;
          <Icon
            style={{ color: 'red' }}
            type="stop"
            onClick={event => {
              event.stopPropagation();
              this.props.unsetEditing(submission.id);
            }}
          />
        </span>
      ) : (
        <span style={{ float: 'right' }}>
          <Icon
            type="edit"
            onClick={event => {
              event.stopPropagation();
              this.props.setEditing(submission.id);
            }}
          />
        </span>
      );
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, form) => {
        this.validateFields(err, form);
      });
    };

    validateFields = (err, form) => {
      if (!err) {
        this.props
          .putForm({
            form,
            id: this.props.submission.id,
            formDefId: this.props.submission.formDefId,
            approved: false,
            userId: this.props.userId,
          })
          .then(() => {
            this.props.unsetEditing(this.props.submission.id);
          });
      }
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form className="submission-form">
          {!this.props.submission.approved && this.renderEdit(this.props.submission)}
          {this.props.submission.fields
            .sort((a, b) => a.fieldIndex - b.fieldIndex)
            .map(field => {
              return this.props.currentlyEditing ? (
                <div key={field.id}>
                  <div style={{ fontWeight: 'bold' }}>{field.label}</div>
                  <Form.Item key={field.id}>
                    {getFieldDecorator(String(field.fieldDefId), {
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
      );
    }
  }
);
