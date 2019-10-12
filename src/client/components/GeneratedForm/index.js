import React from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../../redux/actions/formActions';
import { Form, Input, Button } from 'antd';

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
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.formDef && (
          <Form onSubmit={this.handleSubmit} className="generated-form">
            {this.props.formDef.fields.map(field => {
              return (
                <Form.Item key={field.propertyName}>
                  {getFieldDecorator(field.propertyName, {
                    rules: [
                      { required: true, message: `${field.label} required.` },
                    ],
                  })(<Input placeholder={field.label} />)}
                </Form.Item>
              );
            })}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="generated-form__button"
              >
                Submit
              </Button>
            </Form.Item>
            {this.props.formError && <div>{this.props.formError}</div>}
          </Form>
        )}
      </div>
    );
  }
}

export const GeneratedForm = Form.create({ name: 'generated_form' })(G);

const mapStateToProps = ({ formDefReducer }) => ({
  formDef: formDefReducer.currentFormDef,
});

export default connect(
  mapStateToProps,
  { submitForm }
)(GeneratedForm);
