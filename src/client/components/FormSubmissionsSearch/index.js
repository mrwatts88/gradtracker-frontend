import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Select } from 'antd';
import { getAllFormDefs } from '../../redux/actions/formDefActions';
import {
  getAllFormSubsByUser,
  getAllFormSubsByFormDef,
  CLEAR_GET_ALL_FORMS_BY_USER_STATUS,
  CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS
} from '../../redux/actions/formActions';
import { hasPermission, permissions } from '../../helpers/permissionHelper';
import { dispatchType } from '../../redux/actions/commonActions';

const { Option } = Select;
const { Search } = Input;

const SEARCH_METHODS = {
  user: 'user',
  formDef: 'formDef',
};

export class FormSubmissionsSearch extends Component {
  state = {
    searchMethod: SEARCH_METHODS.user,
  };

  componentDidMount = () => this.props.getAllFormDefs();

  search = () => {
    if (this.state.pantherId) {
      this.props.dispatchType(CLEAR_GET_ALL_FORMS_BY_USER_STATUS);
      this.props.dispatchType(CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS);
      this.props.getAllFormSubsByUser(this.state.pantherId).then(() => this.setState({ pantherId: '' }));
    }
  };

  handleMethodChange = searchMethod => {
    this.setState({ searchMethod });
  };

  handleFormDefChange = formDefId => {
    this.props.getAllFormSubsByFormDef(formDefId);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      hasPermission(this.props.user, permissions.READ_ALL_FORMS) &&
      < div style={{ display: 'flex', marginBottom: '15px' }}>
        <Select onChange={this.handleMethodChange} value={this.state.searchMethod} style={{ marginRight: '10px' }}>
          <Option value={SEARCH_METHODS.user}>Panther ID&nbsp;</Option>
          <Option value={SEARCH_METHODS.formDef}>Form Type&nbsp;</Option>
        </Select>
        {
          this.state.searchMethod === SEARCH_METHODS.formDef && (
            <Select placeholder="Select Form" onChange={this.handleFormDefChange} style={{ width: '100%' }}>
              {(this.props.formDefs || []).map(formDef =>
                <Option key={formDef.id} value={formDef.id}>{formDef.name}&nbsp;</Option>
              )}
            </Select>
          )
        }
        {
          this.state.searchMethod === SEARCH_METHODS.user && (
            <Search
              name="pantherId"
              placeholder=""
              enterButton="Search"
              onSearch={this.search}
              value={this.state.pantherId}
              onChange={this.handleInputChange} />
          )
        }
      </div >

    );
  }
}

const mapStateToProps = ({ formDefReducer, authReducer }) =>
  ({ formDefs: formDefReducer.formDefs, user: authReducer.currentUser });

export default connect(mapStateToProps,
  {
    getAllFormSubsByUser,
    getAllFormSubsByFormDef,
    getAllFormDefs,
    dispatchType
  })(FormSubmissionsSearch);
