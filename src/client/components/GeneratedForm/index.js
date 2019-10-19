import React from 'react';
import { connect } from 'react-redux';
import { postForm } from '../../redux/actions/formActions';
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
      this.props.postForm(form);
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {this.props.currentFormDef && (
          <Form onSubmit={this.handleSubmit} className="generated-form">
            {this.props.currentFormDef.fieldDefs.map(field => {
              let fieldDecorator = field.label.split(' ');
              fieldDecorator[0] = fieldDecorator[0].toLowerCase();
              fieldDecorator = fieldDecorator.join('');
              return (
                <Form.Item key={fieldDecorator}>
                  {getFieldDecorator(fieldDecorator, {
                    rules: [{ required: true, message: `${field.label} required.` }],
                  })(<Input placeholder={field.label} />)}
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
        )}
      </div>
    );
  }
}

export const GeneratedForm = Form.create({ name: 'generated_form' })(G);

const mapStateToProps = ({ formReducer, formDefReducer }) => ({
  currentFormDef: formDefReducer.currentFormDef,
  formError: formReducer.errorMessage,
});

export default connect(
  mapStateToProps,
  { postForm }
)(GeneratedForm);
