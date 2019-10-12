import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GeneratedForm } from '../../components';
import {
  changeForm,
  fetchFormDefinitions,
} from '../../redux/actions/formActions';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

export class FormsPage extends Component {
  handleChange = value => {
    this.props.changeForm(value);
  };

  componentDidMount = () => {
    this.props.fetchFormDefinitions();
  };

  render() {
    return (
      <div>
        {this.props.formDefinitions && (
          <Row>
            <Col
              xs={{ offset: 0, span: 24 }}
              md={{ offset: 3, span: 18 }}
              lg={{ offset: 6, span: 12 }}
            >
              <Select
                style={{ width: '100%' }}
                placeholder="Select a form"
                onChange={this.handleChange}
              >
                {this.props.formDefinitions.map(fd => (
                  <Option key={fd.id} value={fd.id}>
                    {fd.name}
                  </Option>
                ))}
              </Select>
              <GeneratedForm />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer }) => ({
  formDefinitions: formReducer.formDefinitions,
});

export default connect(
  mapStateToProps,
  { changeForm, fetchFormDefinitions }
)(FormsPage);
