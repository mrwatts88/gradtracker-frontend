import React, { Component } from 'react';
import { Button, Input, Row, Col, Form } from 'antd';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

class CreateForm extends Component {
  state = {
    fields: [],
    fieldName: '',
    nextListId: 0,
  };

  addField = e => {
    e.preventDefault();
    if (!this.state.fieldName) return;

    this.setState({
      fields: [
        ...this.state.fields,
        { fieldName: this.state.fieldName, id: this.state.nextListId },
      ],
      fieldName: '',
      nextListId: this.state.nextListId + 1,
    });
  };

  onTextInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRLDDChange = newFields => {
    this.setState({ fields: newFields });
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
            <Row gutter={16}>
              <Form onSubmit={this.addField}>
                <Col xs={24} md={18}>
                  <Input
                    onChange={this.onTextInputChange}
                    name="fieldName"
                    type="text"
                    placeholder="Field Name"
                    value={this.state.fieldName}
                  ></Input>
                </Col>
                <Col xs={24} md={6}>
                  <Button
                    style={{ width: '100%' }}
                    type="primary"
                    htmlType="submit"
                  >
                    Add Field
                  </Button>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ offset: 0, span: 24 }}
            md={{ offset: 3, span: 18 }}
            lg={{ offset: 6, span: 12 }}
          >
            <RLDD
              items={this.state.fields}
              itemRenderer={item => <Field field={item} />}
              onChange={this.handleRLDDChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateForm;

class Field extends Component {
  deleteField = id => {
    console.log(id);
  };
  render() {
    return (
      <div>
        {this.props.field.fieldName}
        <span
          onClick={() => this.deleteField(this.props.field.id)}
          style={{ float: 'right' }}
        >
          X
        </span>
      </div>
    );
  }
}
