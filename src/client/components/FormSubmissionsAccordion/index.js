import { Collapse } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllFormSubsByUser, putForm } from '../../redux/actions/formActions';
import SubmissionForm from './submissionForm';
import moment from 'moment';

export class FormSubmissionsAccordion extends Component {
  state = {
    currentlyEditing: [],
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getAllFormSubsByUser(1);
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
      <div>
        <Collapse>
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
                  userId={this.props.userId}
                />
              </Collapse.Panel>
            );
          })}
        </Collapse>
        <br />
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer, authReducer }) => ({
  submissions: formReducer.submissions,
  userId: authReducer.currentUser.id,
});

export default connect(
  mapStateToProps,
  { getAllFormSubsByUser, putForm }
)(FormSubmissionsAccordion);
