import React from 'react';
import { LogInForm, L } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';

describe('LogInForm', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      authenticate: jest.fn(),
      dispatchType: jest.fn(),
    };
  });

  it('renders without crashing', () => {
    wrapper = shallow(<LogInForm {...props} />);
  });

  describe('form onSubmit', () => {
    it('calls calls validateFields', () => {
      const mockValidateFields = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = shallow(<LogInForm {...props} />);

      wrapper.props().form.validateFields = mockValidateFields;
      wrapper
        .dive()
        .find(Form)
        .prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidateFields).toBeCalled();
    });

    it('calls calls validateEmailPassword', () => {
      const mockValidateEmailPassword = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = mount(<LogInForm {...props} />);

      const component = wrapper.find(L);
      component.instance().validateEmailPassword = mockValidateEmailPassword;
      component.find(Form).prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidateEmailPassword).toBeCalled();
    });
  });

  describe('validateEmailPassword', () => {
    it('calls logIn', () => {
      wrapper = shallow(<LogInForm {...props} />);
      wrapper
        .dive()
        .instance()
        .validateEmailPassword(undefined, 'test_email@gmail.com', 'test_password');
      expect(props.authenticate).toBeCalled();
    });

    it('doesnt call login if there is an error', () => {
      wrapper = shallow(<LogInForm {...props} />);
      wrapper
        .dive()
        .instance()
        .validateEmailPassword('error', 'test_email@gmail.com', 'test_password');
      expect(props.authenticate).not.toBeCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('clears authenticate status', () => {
      wrapper = mount(<LogInForm {...props} />);
      wrapper.unmount();
      expect(props.dispatchType).toBeCalled();
    });
  });
});
