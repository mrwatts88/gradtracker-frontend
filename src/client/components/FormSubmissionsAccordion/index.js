import { Collapse, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllFormSubsByUser } from '../../redux/actions/formActions';
import { SubmissionForm } from './submissionForm';

const { Panel } = Collapse;

export class FormSubmissionsAccordion extends Component {
  state = {
    currentlyEditing: [],
  };

  renderEdit = subId => {
    return this.state.currentlyEditing.includes(subId) ? (
      <React.Fragment>
        <Icon
          type="save"
          style={{ color: 'green' }}
          onClick={event => {
            event.stopPropagation();
            const currentlyEditing = [...this.state.currentlyEditing].filter(id => id !== subId);
            this.setState({ currentlyEditing });
          }}
        />
        &nbsp;
        <Icon
          style={{ color: 'red' }}
          type="stop"
          onClick={event => {
            event.stopPropagation();
            const currentlyEditing = [...this.state.currentlyEditing].filter(id => id !== subId);
            this.setState({ currentlyEditing });
          }}
        />
      </React.Fragment>
    ) : (
      <Icon
        type="edit"
        onClick={event => {
          event.stopPropagation();
          const currentlyEditing = [...this.state.currentlyEditing];
          currentlyEditing.push(subId);
          this.setState({ currentlyEditing });
        }}
      />
    );
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getAllFormSubsByUser(1);
  }

  render() {
    return (
      <div>
        <Collapse>
          {(this.props.submissions || []).map(s => {
            return (
              <Panel
                header={`${s.name} - ${s.submissionDate} ${s.approved ? '' : '(pending)'}`}
                key={s.id}
                extra={!s.approved && this.renderEdit(s.id)}
              >
                <SubmissionForm submission={s} currentlyEditing={this.state.currentlyEditing.includes(s.id)} />
              </Panel>
            );
          })}
        </Collapse>
        <br />
      </div>
    );
  }
}

const mapStateToProps = ({ formReducer }) => ({
  submissions: formReducer.submissions,
});

export default connect(
  mapStateToProps,
  { getAllFormSubsByUser }
)(FormSubmissionsAccordion);
