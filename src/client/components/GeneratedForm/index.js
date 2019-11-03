import React from 'react';
import { connect } from 'react-redux';
import { postForm, POST_FORM, POST_FORM_ERROR, POST_FORM_SUCCESS } from '../../redux/actions/formActions';
import { Form, Input, Button, Icon } from 'antd';
import { GET_FORM_DEF } from '../../redux/actions/formDefActions';

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
      <React.Fragment>
        {this.props.currentFormDef && this.props.getFormDefStatus !== GET_FORM_DEF && (
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
              <Button
                loading={this.props.postFormStatus === POST_FORM}
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
                className="generated-form__button">
                Submit
            </Button>
            </Form.Item>
            {this.props.postFormStatus === POST_FORM_ERROR && <div className="error">{this.props.formError}</div>}
            {this.props.postFormStatus === POST_FORM_SUCCESS && <div>Form submitted successfully.</div>}
          </Form>
        )}

        {this.props.getFormDefStatus === GET_FORM_DEF &&
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Icon style={{ fontSize: '40px' }} spin type="loading-3-quarters" />
          </div>}
      </React.Fragment>

    );
  }
}

export const GeneratedForm = Form.create({ name: 'generated_form' })(G);

const mapStateToProps = ({ formReducer, formDefReducer, authReducer }) => ({
  getFormDefStatus: formDefReducer.getFormDefStatus,
  currentFormDef: formDefReducer.currentFormDef,
  formError: formReducer.errorMessage,
  userId: authReducer.currentUser.id,
  postFormStatus: formReducer.postFormStatus,
});

export default connect(mapStateToProps, { postForm })(GeneratedForm);
