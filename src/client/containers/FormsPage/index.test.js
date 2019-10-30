import React from 'react';
import { shallow } from 'enzyme';
import { FormDefSelect, GeneratedForm } from '../../components';
import { FormsPage } from '.';

describe('forms page', () => {
  it('renders', () => {
    const component = shallow(<FormsPage />);

    expect(component.find(FormDefSelect).length).toEqual(1);
    expect(component.find(GeneratedForm).length).toEqual(1);
  });
});
