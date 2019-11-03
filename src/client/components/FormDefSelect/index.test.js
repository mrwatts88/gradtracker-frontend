import React from 'react';
import { FormDefSelect } from '.';
import { shallow } from 'enzyme';
import { Select } from 'antd';

const { Option } = Select;

describe('FormDefSelect', () => {
  let component;

  const props = {
    getAllFormDefs: jest.fn(),
    getFormDef: jest.fn(),
    dispatchType: jest.fn(),
    currentFormDef: { id: 1, name: 'test name' },
    formDefs: [{ id: 1, name: 'test name' }, { id: 2, name: 'test name 2' }]
  };

  beforeEach(() => {
    component = shallow(<FormDefSelect {...props} />);
  });

  it('renders', () => {
    expect(component.find(Select).length).toEqual(1);
    expect(component.find(Option).length).toEqual(2);
  });

  it('doesnt render options when there are no form defs in state', () => {
    component = shallow(<FormDefSelect {...props} formDefs={null} />);
    expect(component.find(Option).length).toEqual(0);
  });

  it('calls getAllFormDefs on mount', () => {
    expect(props.getAllFormDefs).toBeCalled();
  });

  it('calls getFormDef when the select input is changed', () => {
    component.find(Select).simulate('change');
    expect(props.getFormDef).toBeCalled();
  });
});
