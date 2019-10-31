import React from 'react';
import { CreateForm } from '.';
import { shallow } from 'enzyme';

describe('CreateForm', () => {
  let component;

  const props = {
    formDefError: 'error',
    status: 'status',
    postFormDef: jest.fn(),
    clearFormDefError: jest.fn()
  };

  beforeEach(() => {
    component = shallow(<CreateForm {...props} />);
  });

  it('renders', () => {
    expect(component.find('div').length).toEqual(1);
  });
});
