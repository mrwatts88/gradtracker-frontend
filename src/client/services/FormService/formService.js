import axios from 'axios';
import { transformForm } from '../../helpers/transformForm';
import { authHeader } from '../../helpers/authHeader';

export const FORM_URL = `${CONTEXT_ROOT}/api/form/`;

export const formService = {
  postForm: form => axios.post(FORM_URL, transformForm(form), { headers: authHeader() }),
  getAllFormSubsByUser: userId => Promise.resolve({
    data: [
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
    ]
  })
};
