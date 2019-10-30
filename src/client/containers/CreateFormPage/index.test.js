import React from 'react';
import { shallow } from 'enzyme';
import { CreateForm } from '../../components';
import { CreateFormPage } from '.';

describe('CreateFormPage', () => {
  it('renders', () => {
    const component = shallow(<CreateFormPage />);

    expect(component.find(CreateForm).length).toEqual(1);
  });
});
