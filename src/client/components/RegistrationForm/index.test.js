import React from 'react';
import { RegistrationForm, R } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';
import { REGISTER_SUCCESS, REGISTER_ERROR } from '../../redux/actions/authActions';

describe('RegistrationForm', () => {
  let wrapper, props, warn, error;

  beforeEach(() => {
    props = {
      register: jest.fn(() => Promise.resolve()),
      dispatchType: jest.fn(),
      registerStatus: REGISTER_SUCCESS,
    };
    warn = jest.spyOn(console, 'warn').mockImplementation();
    error = jest.spyOn(console, 'error').mockImplementation();
  });

  afterAll(() => {
    warn.mockRestore();
    error.mockRestore();
  });

  describe('ui', () => {
    it('renders without crashing', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      expect(wrapper.dive().find('span.error').length).toEqual(0);
      expect(wrapper.dive().find('span.success').length).toEqual(1);
    });

    it('shows error message', () => {
      props.registerStatus = REGISTER_ERROR;
      wrapper = shallow(<RegistrationForm {...props} />);
      expect(wrapper.dive().find('span.error').length).toEqual(1);
    });
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
      component.instance().register = mockValidate;
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
        .register(undefined, 'test_email@gmail.com');
      expect(props.register).toBeCalled();
    });

    it('doesnt call register if there is an error', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      wrapper
        .dive()
        .instance()
        .register('error', 'test_email@gmail.com');
      expect(props.register).not.toBeCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('should clear register status', () => {
      wrapper = mount(<RegistrationForm {...props} />);
      wrapper.unmount();
      expect(props.dispatchType).toBeCalled();
    });
  });
});
