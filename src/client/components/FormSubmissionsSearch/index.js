import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Select, Button } from 'antd';
import { getAllFormSubsByUser, getAllFormSubsByFormDefId } from '../../redux/actions/formActions';

const { Option } = Select;
const { Search } = Input;

const SEARCH_METHODS = {
  user: 'user',
  formDef: 'formDef',
};

export class FormSubmissionsSearch extends Component {
  state = {
    searchMethod: SEARCH_METHODS.user
  }

  search = () => {
    console.log('searching');
  }

  handleChange = value => {
    console.log(value);
  }

  render() {
    return (
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <Select
          onChange={this.handleChange}
          defaultValue={this.state.searchMethod}
          style={{ marginRight: '10px' }}
        >
          <Option value={SEARCH_METHODS.user}>
            Panther ID&nbsp;
          </Option>
          <Option value={SEARCH_METHODS.formDef}>
            Form Type&nbsp;
          </Option>
        </Select>
        <Search
          placeholder=""
          enterButton="Search"
          onSearch={this.search}
        />
      </div>
    );
  }
}

export default connect(null, { getAllFormSubsByUser, getAllFormSubsByFormDefId })(FormSubmissionsSearch);
