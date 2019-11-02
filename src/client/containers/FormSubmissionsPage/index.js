import React from 'react';
import { FormSubmissionsAccordion, FormSubmissionsSearch } from '../../components';
import { Row, Col } from 'antd';

export const FormSubmissionsPage = () => {
  return (
    <div>
      <Row>
        <Col
          xs={{ offset: 0, span: 24 }}
          md={{ offset: 3, span: 18 }}
          lg={{ offset: 5, span: 14 }}>
          <FormSubmissionsSearch />
          <FormSubmissionsAccordion />
        </Col>
      </Row>
    </div>
  );
};

export default FormSubmissionsPage;
