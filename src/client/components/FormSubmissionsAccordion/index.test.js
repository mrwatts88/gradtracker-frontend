import React from 'react';
import { FormSubmissionsAccordion } from '.';
import { shallow } from 'enzyme';
import { Collapse } from 'antd';

describe('FromSubmissionsAccordion', () => {
  let component;

  const props = {
    submissions: [{ name: 'test name', id: 1, approved: true, createdDate: '2007-04-05T24:00' }],
    user: { id: 1 },
    getAllFormSubsByUser: jest.fn(),
    putForm: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<FormSubmissionsAccordion {...props} />);
  });

  it('renders', () => {
    expect(component.find(Collapse).length).toEqual(1);
  });

  it('doesnt call getAllFormSubsByUser on mount', () => {
    expect(props.getAllFormSubsByUser).not.toBeCalled();
  });

  describe('un/setEditing', () => {
    it('removes submission from state when unsetting editing', () => {
      component.setState({ currentlyEditing: [1] });
      component.instance().unsetEditing(1);
      expect(component.state('currentlyEditing').length).toEqual(0);
    });

    it('adds submission to state when setting editing', () => {
      component.instance().setEditing(1);
      expect(component.state('currentlyEditing').length).toEqual(1);
      expect(component.state('currentlyEditing')[0]).toEqual(1);
    });
  });
});
