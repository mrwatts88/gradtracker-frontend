import React from 'react';
import { shallow } from 'enzyme';
import { FormSubmissionsAccordion } from '../../components';
import FormSubmissionsPage from '.';

describe('FormSubmissionsPage', () => {
  it('renders', () => {
    const component = shallow(<FormSubmissionsPage />);

    expect(component.find(FormSubmissionsAccordion).length).toEqual(1);
  });
});
