import React from 'react';
import { RegistrationForm, R } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';
import { REGISTER_SUCCESS, REGISTER_ERROR } from '../../redux/actions/authActions';

describe('LogInForm', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      register: jest.fn(() => Promise.resolve()),
      dispatchType: jest.fn(),
      registerStatus: REGISTER_SUCCESS,
    };
  });

  describe('ui', () => {
    it('renders without crashing', () => {
      wrapper = shallow(<RegistrationForm {...props} />);
      expect(wrapper.dive().find('div.error').length).toEqual(0);
      expect(wrapper.dive().find('div.success').length).toEqual(1);
    });

    it('shows error message', () => {
      props.registerStatus = REGISTER_ERROR;
      wrapper = shallow(<RegistrationForm {...props} />);
      expect(wrapper.dive().find('div.error').length).toEqual(1);
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
