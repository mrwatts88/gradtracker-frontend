import React from 'react';
import { FormSubmissionsSearch } from '.';
import { shallow } from 'enzyme';

describe('FormSubmissionsSearch', () => {
  const props = {
    user: { authorities: [] },
    getAllFormDefs: jest.fn(),
  };

  it('FormSubmissionsSearch', () => {
    shallow(<FormSubmissionsSearch {...props} />);
  });
});
