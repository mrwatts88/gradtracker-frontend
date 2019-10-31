import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormDef, getAllFormDefs } from '../../redux/actions/formDefActions';
import { Select } from 'antd';

const { Option } = Select;

export class FormDefSelect extends Component {
  componentDidMount = () => this.props.getAllFormDefs();

  handleChange = id => this.props.getFormDef(id);

  render() {
    return (
      <Select
        style={{ width: '100%' }}
        placeholder="Select a form"
        onChange={this.handleChange}
        defaultValue={this.props.currentFormDef && this.props.currentFormDef.id}
      >
        {(this.props.formDefs || []).map(fd => (
          <Option key={fd.id} value={fd.id}>
            {fd.name}
          </Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = ({ formDefReducer }) => ({
  formDefs: formDefReducer.formDefs,
  currentFormDef: formDefReducer.currentFormDef
});

export default connect(mapStateToProps, { getFormDef, getAllFormDefs })(FormDefSelect);
