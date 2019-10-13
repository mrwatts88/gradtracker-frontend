import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GeneratedForm } from '../../components';
import { getFormDef, getAllFormDefs } from '../../redux/actions/formDefActions';
import { Row, Col, Select } from 'antd';

const { Option } = Select;

export class FormsPage extends Component {
  handleChange = id => {
    this.props.getFormDef(id);
  };

  componentDidMount = () => {
    this.props.getAllFormDefs();
  };

  render() {
    return (
      <div>
        {this.props.formDefs && (
          <Row>
            <Col xs={{ offset: 0, span: 24 }} md={{ offset: 3, span: 18 }} lg={{ offset: 6, span: 12 }}>
              <Select style={{ width: '100%' }} placeholder="Select a form" onChange={this.handleChange}>
                {this.props.formDefs.map(fd => (
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

const mapStateToProps = ({ formDefReducer }) => ({
  formDefs: formDefReducer.formDefs,
});

export default connect(
  mapStateToProps,
  { getFormDef, getAllFormDefs }
)(FormsPage);
