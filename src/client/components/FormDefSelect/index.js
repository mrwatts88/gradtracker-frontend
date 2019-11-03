import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFormDef,
  getAllFormDefs,
  GET_ALL_FORM_DEFS,
  CLEAR_GET_ALL_FORM_DEFS_STATUS
} from '../../redux/actions/formDefActions';
import { Select, Icon } from 'antd';
import { dispatchType } from '../../redux/actions/commonActions';
import { CLEAR_POST_FORM_STATUS } from '../../redux/actions/formActions';

const { Option } = Select;

export class FormDefSelect extends Component {
  componentDidMount = () => this.props.getAllFormDefs();

  componentWillUnmount = () => this.props.dispatchType(CLEAR_GET_ALL_FORM_DEFS_STATUS);

  handleChange = id => {
    this.props.dispatchType(CLEAR_POST_FORM_STATUS);
    this.props.getFormDef(id);
  }

  render() {
    return (
      this.props.getAllFormDefsStatus === GET_ALL_FORM_DEFS
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Icon style={{ fontSize: '40px' }} spin type="loading-3-quarters" />
        </div>
        : <Select
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
  currentFormDef: formDefReducer.currentFormDef,
  getAllFormDefsStatus: formDefReducer.getAllFormDefsStatus
});

export default connect(mapStateToProps, { getFormDef, getAllFormDefs, dispatchType })(FormDefSelect);
