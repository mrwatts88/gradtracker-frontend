import React from 'react';
import { SubmissionForm, S } from './submissionForm';
import { shallow, mount } from 'enzyme';
import { Form, Icon } from 'antd';

describe('SubmissionForm', () => {
  let wrapper;

  const props = {
    currentlyEditing: true,
    putForm: jest.fn(() => Promise.resolve()),
    unsetEditing: jest.fn(),

    setEditing: jest.fn(),
    submission: {
      approved: false,
      fields: [{ fieldIndex: 0, id: 1, fieldDefId: 2, data: 'test data', label: 'test label' },
        { fieldIndex: 1, id: 2, fieldDefId: 3, data: 'test data', label: 'test label' }]
    }
  };

  beforeEach(() => {
    wrapper = shallow(<SubmissionForm {...props} />);
  });

  describe('form onSubmit', () => {
    it('calls validateFields', () => {
      const mockValidateFields = jest.fn();
      const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };

      wrapper.props().form.validateFields = mockValidateFields;
      wrapper
        .dive()
        .find(Form)
        .find(Icon).at(1)
        .prop('onClick')(event);
      expect(event.stopPropagation).toBeCalled();
      expect(event.preventDefault).toBeCalled();
      expect(mockValidateFields).toBeCalled();
    });

    it('calls putForm', () => {
      const mockPutForm = jest.fn();
      const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
      wrapper = mount(<SubmissionForm {...props} />);

      const component = wrapper.find(S);
      component.instance().putForm = mockPutForm;
      component.find(Form).find(Icon).at(1).prop('onClick')(event);
      expect(event.stopPropagation).toBeCalled();
      expect(mockPutForm).toBeCalled();
    });

    it('calls unsetEditing when clicking cancel icon', () => {
      const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
      wrapper = mount(<SubmissionForm {...props} />);

      const component = wrapper.find(S);
      component.find(Form).find(Icon).first().prop('onClick')(event);
      expect(event.stopPropagation).toBeCalled();
      expect(props.unsetEditing).toBeCalled();
    });

    it('calls setEditing when clicking edit icon', () => {
      const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
      wrapper = mount(<SubmissionForm {...props} currentlyEditing={false} />);

      const component = wrapper.find(S);
      component.find(Form).find(Icon).first().prop('onClick')(event);
      expect(event.stopPropagation).toBeCalled();
      expect(props.setEditing).toBeCalled();
    });
  });

  describe('putForm', () => {
    it('calls props.putForm', async () => {
      await wrapper
        .dive()
        .instance()
        .putForm(undefined, 'test_email@gmail.com');
      expect(props.putForm).toBeCalled();
      expect(props.unsetEditing).toBeCalled();
    });

    it('doesnt call props.putForm if there is an error', () => {
      wrapper
        .dive()
        .instance()
        .putForm('error', 'test_email@gmail.com');
      expect(props.putForm).toBeCalled();
    });
  });
});
