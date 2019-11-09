import React from 'react';
import { Form, Input, Icon } from 'antd';
import { hasPermissions, permissions } from '../../helpers/permissionHelper';

export class S extends React.Component {
  state = { saving: false }

  renderEdit = submission => {
    if (this.state.saving) {
      return <Icon style={{ float: 'right' }} spin type="loading-3-quarters" />;
    }
    return this.props.currentlyEditing ? (
      <React.Fragment>
        <Icon
          style={{ color: 'red', float: 'right', marginLeft: '3px' }}
          type="stop"
          onClick={event => {
            event.stopPropagation();
            this.props.unsetEditing(submission.id);
          }}
        />
        <Icon
          type="save"
          style={{ color: 'green', float: 'right' }}
          onClick={event => {
            event.stopPropagation();
            this.handleSubmit(event);
          }}
        />
      </React.Fragment>
    ) : (
      <Icon
        type="edit"
        style={{ float: 'right' }}
        onClick={event => {
          event.stopPropagation();
          this.props.setEditing(submission.id);
        }}
      />
    );
  };

  renderApproval = submission => {
    console.log(hasPermissions(this.props.user, [permissions.APPROVE_FORM_REQUEST]));

    if (hasPermissions(this.props.user, [permissions.APPROVE_FORM_REQUEST])) {
      return (
        <React.Fragment>
          <Icon
            style={{ fontSize: '20px', color: 'red', float: 'right', marginLeft: '3px' }}
            type="dislike"
            onClick={event => {
              event.stopPropagation();
              this.handleRejection(event);
            }}
          />
          <Icon
            style={{ fontSize: '20px', color: 'green', float: 'right', marginLeft: '24px' }}
            type="like"
            onClick={event => {
              event.stopPropagation();
              this.handleApproval(event);
            }}
          />
        </React.Fragment>
      );
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, form) => {
      this.putForm(err, form);
    });
  };

  putForm = (err, form) => {
    if (!err) {
      this.setState({ saving: true });
      this.props
        .putForm({
          form,
          id: this.props.submission.id,
        })
        .then(() => {
          this.setState({ saving: false });
          this.props.unsetEditing(this.props.submission.id);
        });
    }
  };

  // handleApproval = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, form) => {
  //     this.putApproveForm(err, form);
  //   });
  // };

  // putApproveForm = (err, form) => {
  //   if (!err) {
  //     this.setState({ saving: true });
  //     this.props
  //       .putForm({
  //         form,
  //         id: this.props.submission.id,
  //         formDefId: this.props.submission.formDefId,
  //         approved: true,
  //         userId: this.props.user.id,
  //       })
  //       .then(() => {
  //         this.setState({ saving: false });
  //         this.props.unsetEditing(this.props.submission.id);
  //       });
  //   }
  // };

  // handleRejection = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, form) => {
  //     this.putRejectForm(err, form);
  //   });
  // };

  // putRejectForm = (err, form) => {
  //   if (!err) {
  //     this.setState({ saving: true });
  //     this.props
  //       .putForm({
  //         form,
  //         id: this.props.submission.id,
  //         formDefId: this.props.submission.formDefId,
  //         approved: false,
  //         userId: this.props.user.id,
  //       })
  //       .then(() => {
  //         this.setState({ saving: false });
  //         this.props.unsetEditing(this.props.submission.id);
  //       });
  //   }
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (hasPermissions(this.props.user, [permissions.APPROVE_FORM_REQUEST])) {
      return (
        <Form className="submission-form">
          {!this.props.submission.approved && this.renderApproval(this.props.submission)}
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
    };
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
  };
};

export const SubmissionForm = Form.create({ name: 'submission_form' })(S);
