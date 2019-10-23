import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postFormDef,
  clearFormDefError,
  POST_FORM_DEF_ERROR,
  POST_FORM_DEF_SUCCESS,
} from '../../redux/actions/formDefActions';
import { Button, Input, Row, Col, Form, Icon } from 'antd';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

class CreateForm extends Component {
  state = {
    fieldDefs: [],
    label: '',
    nextListId: 0,
  };

  addField = e => {
    e.preventDefault();
    this.props.clearFormDefError();

    if (!this.state.label) return;

    this.setState({
      fieldDefs: [
        ...this.state.fieldDefs,
        {
          label: this.state.label,
          id: this.state.nextListId,
          inputType: 'text',
          dataType: 'string',
        },
      ],
      label: '',
      nextListId: this.state.nextListId + 1,
    });
  };

  postFormDef = e => {
    e.preventDefault();
    if (!this.state.formName || !this.state.fieldDefs.length) return;

    const fieldDefs = this.state.fieldDefs.map((field, fieldIndex) => {
      const f = { ...field, fieldIndex };
      delete f.id;
      return f;
    });

    this.props
      .postFormDef({ name: this.state.formName, fieldDefs })
      .then(() => this.setState({ fieldDefs: [], formName: '' }));
  };

  deleteField = id => {
    const fieldDefs = [...this.state.fieldDefs];

    this.setState({
      fieldDefs: fieldDefs.filter(field => field.id !== id),
    });
  };

  onTextInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRLDDChange = newfieldDefs => {
    this.setState({ fieldDefs: newfieldDefs });
  };

  render() {
    return (
      <div>
        <Row>
          <Col
            style={{
              borderBottom: '1px solid black',
              paddingBottom: '5px',
              marginBottom: '5px',
            }}
            xs={{ offset: 0, span: 24 }}
            md={{ offset: 3, span: 18 }}
            lg={{ offset: 6, span: 12 }}
          >
            <Form onSubmit={this.addField}>
              <Row>
                <Col xs={24}>
                  <Input
                    onChange={this.onTextInputChange}
                    name="formName"
                    type="text"
                    placeholder="Form Name"
                    value={this.state.formName}
                  ></Input>
                  <Input
                    onChange={this.onTextInputChange}
                    name="label"
                    type="text"
                    placeholder="Field Name"
                    value={this.state.label}
                  ></Input>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                    Add Field
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button style={{ width: '100%' }} type="primary" htmlType="button" onClick={this.postFormDef}>
                    Create Form
                  </Button>
                </Col>
              </Row>
            </Form>
            {this.props.status === POST_FORM_DEF_ERROR && this.props.formDefError}
            {this.props.status === POST_FORM_DEF_SUCCESS && 'Form created.'}
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 0, span: 24 }} md={{ offset: 3, span: 18 }} lg={{ offset: 6, span: 12 }}>
            <RLDD
              items={this.state.fieldDefs}
              itemRenderer={item => <Field field={item} deleteField={this.deleteField} />}
              onChange={this.handleRLDDChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ formDefReducer }) => ({
  formDefError: formDefReducer.errorMessage,
  status: formDefReducer.status,
});

export default connect(
  mapStateToProps,
  { postFormDef, clearFormDefError }
)(CreateForm);

class Field extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Input disabled value={this.props.field.label} />
        <Icon
          type="close-circle"
          onClick={() => this.props.deleteField(this.props.field.id)}
          style={{
            float: 'right',
            lineHeight: 2.7,
            fontSize: '19px',
            color: 'red',
            marginLeft: '21px',
          }}
        />
      </div>
    );
  }
}
