import React from 'react';
import { RegistrationForm, R } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';

describe('LogInForm', () => {
  let wrapper;

  const props = {
    register: jest.fn(() => Promise.resolve()),
    dispatchType: jest.fn()
  };

  it('renders without crashing', () => {
    wrapper = shallow(<RegistrationForm {...props} />);
  });

  describe('form onSubmit', () => {
    it('calls validateFields', () => {
      const mockValidateFields = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = shallow(<RegistrationForm {...props} />);

      wrapper.props().form.validateFields = mockValidateFields;
      wrapper
        .dive()
        .find(Form)
        .prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidateFields).toBeCalled();
    });

    it('calls validate', () => {
      const mockValidate = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = mount(<RegistrationForm {...props} />);

      const component = wrapper.find(R);
      component.instance().validate = mockValidate;
      component.find(Form).prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidate).toBeCalled();
    });
  });

  describe('validate', () => {
    it('calls register', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      wrapper
        .dive()
        .instance()
        .validate(undefined, 'test_email@gmail.com');
      expect(props.register).toBeCalled();
    });

    it('doesnt call register if there is an error', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      wrapper
        .dive()
        .instance()
        .validate('error', 'test_email@gmail.com');
      expect(props.register).toBeCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('should clear register status', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      wrapper.unmount();
      expect(props.dispatchType).toBeCalled();
    });
  });
});
