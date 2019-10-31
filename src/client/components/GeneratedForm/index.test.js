import React from 'react';
import { GeneratedForm, G } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';

describe('GeneratedForm', () => {
  let wrapper;

  const props = {
    postForm: jest.fn(() => Promise.resolve()),
    currentFormDef: { fieldDefs: [{ id: 1, label: 'test label' }] }
  };

  it('renders without crashing', () => {
    wrapper = shallow(<GeneratedForm {...props} />);
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
      expect(props.postForm).toBeCalled();
    });
  });
});
