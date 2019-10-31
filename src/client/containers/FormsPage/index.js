import React, { Component } from 'react';
import { GeneratedForm, FormDefSelect } from '../../components';
import { Row, Col } from 'antd';

export class FormsPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col
            xs={{ offset: 0, span: 24 }}
            md={{ offset: 3, span: 18 }}
            lg={{ offset: 6, span: 12 }}>
            <FormDefSelect />
            <GeneratedForm />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormsPage;
