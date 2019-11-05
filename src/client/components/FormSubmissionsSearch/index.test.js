import React from 'react';
import { FormSubmissionsSearch } from '.';
import { shallow } from 'enzyme';
import { jsxEmptyExpression } from '@babel/types';

describe('FormSubmissionsSearch', () => {
  const props = {
    user: { authorities: [] },
    getAllFormDefs: jest.fn(),
  };

  it('FormSubmissionsSearch', () => {
    shallow(<FormSubmissionsSearch {...props} />);
  });
});
