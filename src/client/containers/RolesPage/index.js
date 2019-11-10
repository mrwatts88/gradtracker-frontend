import React from 'react';
import { Roles } from '../../components';
import { Row, Col } from 'antd';

export const RolesPage = () => (<Row>
  <Col
    xs={{ offset: 0, span: 24 }}
    md={{ offset: 3, span: 18 }}
    lg={{ offset: 6, span: 12 }}>
    <Roles />
  </Col>
</Row>);

export default RolesPage;
