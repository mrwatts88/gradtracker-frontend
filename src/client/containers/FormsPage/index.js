import React from 'react';
import { GeneratedForm } from '../../components';
import { Row, Col } from 'antd';

export const FormsPage = () => (
    <Row>
        <Col xs={{ offset: 0, span: 24 }}
            md={{ offset: 3, span: 18 }}
            lg={{ offset: 6, span: 12 }} >
            <GeneratedForm />
        </Col>
    </Row>
);

export default FormsPage;
