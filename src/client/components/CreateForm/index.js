import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  postFormDef,
  POST_FORM_DEF,
  POST_FORM_DEF_ERROR,
  POST_FORM_DEF_SUCCESS,
  CLEAR_POST_FORM_DEF_STATUS
} from '../../redux/actions/formDefActions';
import { dispatchType } from '../../redux/actions/commonActions';
import { Button, Input, Row, Col, Form, Icon } from 'antd';

const UP = 'up';
const DOWN = 'down';

export class CreateForm extends Component {
  state = {
    fieldDefs: [],
    label: '',
    nextListId: 0
  };

  componentWillUnmount = () => this.props.dispatchType(CLEAR_POST_FORM_DEF_STATUS);

  addField = e => {
    e.preventDefault();
    this.props.dispatchType(CLEAR_POST_FORM_DEF_STATUS);

    if (!this.state.label) return;

    this.setState({
      fieldDefs: [
        ...this.state.fieldDefs,
        {
          label: this.state.label,
          inputType: 'text',
          dataType: 'string'
        }
      ],
      label: '',
    });
  };

  postFormDef = e => {
    e.preventDefault();
    if (!this.state.formName || !this.state.fieldDefs.length) return;

    const fieldDefs = this.state.fieldDefs.map((field, fieldIndex) => {
      const f = { ...field, fieldIndex };
      return f;
    });

    this.props
      .postFormDef({ name: this.state.formName, fieldDefs })
      .then(() => {
        this.setState({ fieldDefs: [], formName: '' });
      });
  };

  deleteField = idx => {
    const fieldDefs = [...this.state.fieldDefs];
    fieldDefs.splice(idx, 1);
    this.setState({ fieldDefs });
  };

  onTextInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  moveInput = (dir, idx) => {
    const fieldDefs = [...this.state.fieldDefs];
    const temp = fieldDefs[idx];
    let otherIdx;

    if (dir === UP) otherIdx = idx - 1;
    else otherIdx = idx + 1;

    fieldDefs[idx] = fieldDefs[otherIdx];
    fieldDefs[otherIdx] = temp;
    this.setState({ fieldDefs });
  }

  render() {
    return (
      <div>
        <Row>
          <Col
            style={{
              paddingBottom: '5px',
              marginBottom: '5px'
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
                  ></Input><br /><br />
                  <Input
                    onChange={this.onTextInputChange}
                    name="label"
                    type="text"
                    placeholder="Field Name"
                    value={this.state.label}
                  ></Input>
                </Col>
              </Row><br />
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Button
                    loading={this.props.postFormDefStatus === POST_FORM_DEF}
                    style={{ width: '100%', marginBottom: '10px' }}
                    type="primary"
                    htmlType="submit">
                    Add Field
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    loading={this.props.postFormDefStatus === POST_FORM_DEF}
                    style={{ width: '100%', marginBottom: '10px' }}
                    type="primary"
                    htmlType="button"
                    onClick={this.postFormDef}>
                    Create Form
                  </Button>
                </Col>
              </Row>
            </Form>
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'red' }}>
                {this.props.postFormDefStatus === POST_FORM_DEF_ERROR && this.props.formDefError}
              </span>
              <span style={{ color: 'green' }}>
                {this.props.postFormDefStatus === POST_FORM_DEF_SUCCESS && 'Form created.'}
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={{ offset: 0, span: 24 }} md={{ offset: 3, span: 18 }} lg={{ offset: 6, span: 12 }}>
            {this.state.fieldDefs.map((field, idx) =>
              <Field
                first={idx === 0}
                last={idx === this.state.fieldDefs.length - 1}
                key={idx}
                idx={idx}
                moveInput={this.moveInput}
                field={field}
                deleteField={this.deleteField} />)}
          </Col>
        </Row>
      </div >
    );
  }
}

const mapStateToProps = ({ formDefReducer }) => ({
  formDefError: formDefReducer.errorMessage,
  postFormDefStatus: formDefReducer.postFormDefStatus
});

export default connect(mapStateToProps, { postFormDef, dispatchType })(CreateForm);

class Field extends Component {
  render() {
    const { idx, first, last } = this.props;

    const style = dir => ({
      lineHeight: '2',
      fontSize: '20px',
      color: dir === UP ? (first ? 'lightgray' : 'black') : (last ? 'lightgray' : 'black'),
      cursor: dir === UP ? (first ? 'not-allowed' : 'pointer') : (last ? 'not-allowed' : 'pointer'),
    });

    return (
      <div style={{ display: 'flex' }}>
        <Icon onClick={() => !first && this.props.moveInput(UP, idx)} style={style(UP)} type="caret-up" />
        <Icon onClick={() => !last && this.props.moveInput(DOWN, idx)} style={style(DOWN)} type="caret-down" />
        <Input style={{ marginLeft: '5px', color: 'black' }} disabled value={this.props.field.label} />
        <Icon
          type="close-circle"
          onClick={() => this.props.deleteField(idx)}
          style={{
            float: 'right',
            lineHeight: 2.0,
            fontSize: '19px',
            color: 'red',
            marginLeft: '9px'
          }}
        />
      </div>
    );
  }
}
