import { Collapse, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAllFormSubsByUser,
  putForm,
  GET_ALL_FORMS_BY_FORM_DEF,
  GET_ALL_FORMS_BY_USER,
  CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS,
  CLEAR_GET_ALL_FORMS_BY_USER_STATUS
} from '../../redux/actions/formActions';
import { SubmissionForm } from './submissionForm';
import { hasPermissions, permissions } from '../../helpers/permissionHelper';
import { dispatchType } from '../../redux/actions/commonActions';
import moment from 'moment';

export class FormSubmissionsAccordion extends Component {
  state = {
    currentlyEditing: [],
  };

  componentDidMount() {
    if (hasPermissions(this.props.user, [permissions.VIEW_SUBMISSION]) &&
      !hasPermissions(this.props.user, [permissions.VIEW_ALL_SUBMISSIONS])) {
      this.props.getAllFormSubsByUser(this.props.user.id);
    }
  }

  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS);
    this.props.dispatchType(CLEAR_GET_ALL_FORMS_BY_USER_STATUS);
  }

  unsetEditing = submissionId => {
    const currentlyEditing = this.state.currentlyEditing.filter(id => id !== submissionId);
    this.setState({ currentlyEditing });
  };

  setEditing = submissionId => {
    const currentlyEditing = [...this.state.currentlyEditing];
    currentlyEditing.push(submissionId);
    this.setState({ currentlyEditing });
  };

  render() {
    return (
      (this.props.getAllFormsByFormDefStatus === GET_ALL_FORMS_BY_FORM_DEF ||
        this.props.getAllFormsByUserStatus === GET_ALL_FORMS_BY_USER)
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Icon style={{ fontSize: '40px' }} spin type="loading-3-quarters" />
        </div>
        : <Collapse>
          {(this.props.submissions || []).map(submission => {
            return (
              <Collapse.Panel
                header={`${submission.name} - ${moment(submission.createdDate).format('MM/DD/YYYY')} ${
                  submission.approved ? '' : '(pending)'
                }`}
                key={submission.id}
              >
                <SubmissionForm
                  key={submission.id}
                  putForm={this.props.putForm}
                  submission={submission}
                  currentlyEditing={this.state.currentlyEditing.includes(submission.id)}
                  unsetEditing={this.unsetEditing}
                  setEditing={this.setEditing}
                  userId={this.props.user.id}
                />
              </Collapse.Panel>
            );
          })}
        </Collapse>

    );
  }
}

const mapStateToProps = ({ formReducer, authReducer }) => ({
  getAllFormsByFormDefStatus: formReducer.getAllFormsByFormDefStatus,
  getAllFormsByUserStatus: formReducer.getAllFormsByUserStatus,
  submissions: formReducer.submissions,
  user: authReducer.currentUser,
});

export default connect(mapStateToProps, { getAllFormSubsByUser, putForm, dispatchType })(FormSubmissionsAccordion);
