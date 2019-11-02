import React from 'react';
import { connect } from 'react-redux';
import { postForm, POST_FORM, POST_FORM_ERROR, POST_FORM_SUCCESS } from '../../redux/actions/formActions';
import { Form, Input, Button } from 'antd';

export class G extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, form) => {
      this.postForm(err, form);
    });
  };

  postForm = (err, form) => {
    if (!err) {
      const reset = this.reset;
      this.props.postForm({
        form,
        formDefId: this.props.currentFormDef.id,
        approved: false,
        userId: this.props.userId,
      }).then(() => { reset(); });
    }
  };

  reset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      this.props.currentFormDef ? (
        <Form onSubmit={this.handleSubmit} className="generated-form">
          {this.props.currentFormDef.fieldDefs.map(fieldDef => {
            return (
              <Form.Item key={fieldDef.id}>
                {getFieldDecorator(String(fieldDef.id), {
                  rules: [{ required: true, message: `${fieldDef.label} required.` }],
                })(<Input placeholder={fieldDef.label} />)}
              </Form.Item>
            );
          })}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="generated-form__button">
              Submit
            </Button>
          </Form.Item>
          {this.props.status === POST_FORM && <div>SUBMIT...</div>}
          {this.props.status === POST_FORM_ERROR && <div className="error">{this.props.formError}</div>}
          {this.props.status === POST_FORM_SUCCESS && <div>Form submitted successfully.</div>}
        </Form>
      ) : null
    );
  }
}

export const GeneratedForm = Form.create({ name: 'generated_form' })(G);

const mapStateToProps = ({ formReducer, formDefReducer, authReducer }) => ({
  currentFormDef: formDefReducer.currentFormDef,
  formError: formReducer.errorMessage,
  userId: authReducer.currentUser.id,
  status: formReducer.status,
});

export default connect(mapStateToProps, { postForm })(GeneratedForm);
