import React from 'react';
import { connect } from 'react-redux';
import { postForm } from '../../redux/actions/formActions';
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
      this.props.postForm({
        form,
        formDefId: this.props.currentFormDef.id,
        approved: false,
        userId: this.props.userId,
      });
    }
  };

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
          {this.props.formError && <div>{this.props.formError}</div>}
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
});

export default connect(mapStateToProps, { postForm })(GeneratedForm);
