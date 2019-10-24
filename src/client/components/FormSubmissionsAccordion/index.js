import { Collapse, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllFormSubsByUser } from '../../redux/actions/formActions';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const renderEdit = () => (
  <Icon
    type='edit'
    onClick={event => {
      event.stopPropagation();
      console.log(event.target);
    }}
  />
);

export class FormSubmissionsAccordion extends Component {
  componentDidMount() {
    this.props.getAllFormSubsByUser(1);
  }

  render() {
    return (
      <div>
        <Collapse onChange={callback}>
          {(this.props.submissions || []).map(s => {
            return <Panel
              header={`${s.name} - ${s.submissionDate} ${s.approved ? '' : '(pending)'}`}
              key={s.id}
              extra={!s.approved && renderEdit()}>
              <div>{s.fields.sort((a, b) => (a.fieldIndex - b.fieldIndex)).map(field => {
                return <div key={field.id}>{field.name}:{field.data}</div>;
              })}</div>
            </Panel>;
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

export default connect(mapStateToProps, { getAllFormSubsByUser })(FormSubmissionsAccordion);
