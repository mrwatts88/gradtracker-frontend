import React from 'react';
import { connect } from 'react-redux';
import {
  postForm,
  POST_FORM,
  POST_FORM_ERROR,
  POST_FORM_SUCCESS,
  CLEAR_POST_FORM_STATUS
} from '../../redux/actions/formActions';
import { Form, Input, Button, Icon } from 'antd';
import {
  GET_FORM_DEF,
  CLEAR_GET_FORM_DEF_STATUS,
  GET_ALL_FORM_DEFS,
  CLEAR_GET_ALL_FORM_DEFS_STATUS
} from '../../redux/actions/formDefActions';
import { dispatchType } from '../../redux/actions/commonActions';

export class G extends React.Component {
  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_POST_FORM_STATUS);
    this.props.dispatchType(CLEAR_GET_FORM_DEF_STATUS);
    this.props.dispatchType(CLEAR_GET_ALL_FORM_DEFS_STATUS);
  }

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
        userId: this.props.user.id,
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
        {this.props.currentFormDef &&
          this.props.getFormDefStatus !== GET_FORM_DEF &&
          this.props.getAllFormDefsStatus !== GET_ALL_FORM_DEFS && (
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
            {this.props.postFormStatus === POST_FORM_SUCCESS &&
            <div className="success">Form submitted successfully.</div>}
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
  getAllFormDefsStatus: formDefReducer.getAllFormDefsStatus,
  currentFormDef: formDefReducer.currentFormDef,
  formError: formReducer.errorMessage,
  user: authReducer.currentUser,
  postFormStatus: formReducer.postFormStatus,
});

export default connect(mapStateToProps, { postForm, dispatchType })(GeneratedForm);
