import { Collapse, Icon } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const submissions = [
  {
    name: 'Acceptance Form',
    id: 1,
    formDefId: 1,
    userId: 1,
    approved: false,
    submissionDate: '10/20/2019',
    fields: [
      {
        name: 'First Name',
        id: 7,
        fieldIndex: 1,
        fieldDefId: 1,
        data: 'Peter'
      },
      {
        name: 'Last Name',
        id: 8,
        fieldIndex: 2,
        fieldDefId: 2,
        data: 'Smith'
      },
      {
        name: 'Blood Type',
        id: 9,
        fieldIndex: 3,
        fieldDefId: 5,
        data: 'AB+'
      }
    ]
  },
  {
    name: 'Thesis Request',
    id: 2,
    formDefId: 1,
    submissionDate: '10/21/2019',
    userId: 1,
    approved: false,
    fields: [
      {
        name: 'First Name',
        id: 10,
        fieldIndex: 1,
        fieldDefId: 1,
        data: 'PETER'
      },
      {
        name: 'Last Name',
        id: 11,
        fieldIndex: 2,
        fieldDefId: 2,
        data: 'SMITH'
      },
      {
        name: 'Thesis',
        id: 12,
        fieldIndex: 3,
        fieldDefId: 5,
        data: 'This is my THESIS'
      }
    ]
  },
  {
    name: 'Graduation Request',
    id: 3,
    formDefId: 1,
    submissionDate: '10/23/2019',
    userId: 1,
    approved: true,
    fields: [
      {
        name: 'First Name',
        id: 13,
        fieldIndex: 1,
        fieldDefId: 1,
        data: 'PeTeR'
      },
      {
        name: 'Last Name',
        id: 14,
        fieldIndex: 2,
        fieldDefId: 2,
        data: 'SmItH'
      },
      {
        name: 'Grad WORDS Req',
        id: 15,
        fieldIndex: 3,
        fieldDefId: 5,
        data: 'I WANT TO GET OUT OF HERE.'
      }
    ]
  }
];

export class FormSubmissionsAccordion extends Component {
  render() {
    return (
      <div>
        <Collapse onChange={callback}>
          {submissions.map(s => {
            return <Panel
              header={`${s.name} - ${s.submissionDate} ${s.approved ? '' : '(pending)'}`}
              key={s.formId}
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

export default connect(null)(FormSubmissionsAccordion);
