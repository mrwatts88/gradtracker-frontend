import React from 'react';
import { CreateForm } from '.';
import { shallow } from 'enzyme';
import { Form } from 'antd';
import { CLEAR_POST_FORM_DEF_STATUS } from '../../redux/actions/formDefActions';

describe('CreateForm', () => {
  let wrapper, component;

  const props = {
    formDefError: 'error',
    status: 'status',
    postFormDef: jest.fn(),
    clearFormDefError: jest.fn(),
    dispatchType: jest.fn()
  };

  beforeEach(() => {
    component = shallow(<CreateForm {...props} />);
  });

  it('renders', () => {
    expect(component.find('div').length).toEqual(2);
  });

  describe('Delete fields', () => {
    it('removes submission from state deleted field is called', () => {
      component.setState({ fieldDefs: [1] });
      component.instance().deleteField(0);
      expect(component.state('fieldDefs').length).toEqual(0);
    });
  });

  describe('Move fields', () => {
    it('removes submission from state deleted field is called', () => {
      component.setState({ fieldDefs: [1, 2] });
      component.instance().moveInput('up', 1);
      expect(component.state('fieldDefs')[0]).toEqual(2);
      expect(component.state('fieldDefs')[1]).toEqual(1);
    });
  });

  describe('componentWillUnmount', () => {
    it('should call dispatchType', () => {
      component.unmount();
      expect(props.dispatchType).toBeCalledWith(CLEAR_POST_FORM_DEF_STATUS);
    });
  });
});
