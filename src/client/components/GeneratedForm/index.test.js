import React from 'react';
import { GeneratedForm, G } from '.';
import { shallow, mount } from 'enzyme';
import { Form, Icon } from 'antd';
import { CLEAR_POST_FORM_STATUS, POST_FORM_ERROR, POST_FORM_SUCCESS } from '../../redux/actions/formActions';
import {
  CLEAR_GET_FORM_DEF_STATUS,
  CLEAR_GET_ALL_FORM_DEFS_STATUS,
  GET_FORM_DEF
} from '../../redux/actions/formDefActions';

describe('GeneratedForm', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      postForm: jest.fn(() => Promise.resolve()),
      currentFormDef: { fieldDefs: [{ id: 1, label: 'test label' }] },
      user: { id: 1 },
      dispatchType: jest.fn(),
      postFormStatus: POST_FORM_SUCCESS,
    };
  });

  describe('ui', () => {
    it('renders without crashing', () => {
      wrapper = shallow(<GeneratedForm {...props} />);
      expect(wrapper.dive().find('span.error').length).toEqual(0);
      expect(wrapper.dive().find('span.success').length).toEqual(1);
    });

    it('shows error message', () => {
      props.postFormStatus = POST_FORM_ERROR;
      wrapper = shallow(<GeneratedForm {...props} />);
      expect(wrapper.dive().find('span.error').length).toEqual(1);
    });

    it('shows loading icon', () => {
      props.getFormDefStatus = GET_FORM_DEF;
      wrapper = shallow(<GeneratedForm {...props} />);
      expect(wrapper.dive().find(Icon).length).toEqual(1);
    });
  });

  describe('form onSubmit', () => {
    it('calls validateFields', () => {
      const mockValidateFields = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = shallow(<GeneratedForm {...props} />);

      wrapper.props().form.validateFields = mockValidateFields;
      wrapper
        .dive()
        .find(Form)
        .prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidateFields).toBeCalled();
    });

    it('calls postForm', () => {
      const mockValidate = jest.fn();
      const event = { preventDefault: jest.fn() };
      wrapper = mount(<GeneratedForm {...props} />);

      const component = wrapper.find(G);
      component.instance().postForm = mockValidate;
      component.find(Form).prop('onSubmit')(event);
      expect(event.preventDefault).toBeCalled();
      expect(mockValidate).toBeCalled();
    });
  });

  describe('validate', () => {
    it('calls postForm', () => {
      wrapper = shallow(<GeneratedForm {...props} />);
      wrapper
        .dive()
        .instance()
        .postForm(undefined, 'test_email@gmail.com');
      expect(props.postForm).toBeCalled();
    });

    it('doesnt call postForm if there is an error', () => {
      wrapper = shallow(<GeneratedForm {...props} />);
      wrapper
        .dive()
        .instance()
        .postForm('error', 'test_email@gmail.com');
      expect(props.postForm).not.toBeCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('calls dispatchType', () => {
      wrapper = mount(<GeneratedForm {...props} />);
      wrapper.unmount();
      expect(props.dispatchType).toBeCalledWith(CLEAR_POST_FORM_STATUS);
      expect(props.dispatchType).toBeCalledWith(CLEAR_GET_FORM_DEF_STATUS);
      expect(props.dispatchType).toBeCalledWith(CLEAR_GET_ALL_FORM_DEFS_STATUS);
    });
  });
});
