import React from 'react';
import { FormSubmissionsAccordion } from '.';
import { shallow } from 'enzyme';
import { Collapse } from 'antd';
import { permissions } from '../../helpers/permissionHelper';
import {
  CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS,
  CLEAR_GET_ALL_FORMS_BY_USER_STATUS
} from '../../redux/actions/formActions';

describe('FromSubmissionsAccordion', () => {
  let component, props;

  beforeEach(() => {
    props = {
      submissions: [{ name: 'test name', id: 1, approved: true, createdDate: '2007-04-05T24:00' }],
      user: { id: 1, authorities: [] },
      getAllFormSubsByUser: jest.fn(),
      putForm: jest.fn(),
      dispatchType: jest.fn(),
    };

    component = shallow(<FormSubmissionsAccordion {...props} />);
  });

  it('renders', () => {
    expect(component.find(Collapse).length).toEqual(1);
  });

  describe('componentDidMount', () => {
    it('doesnt call getAllFormSubsByUser with no permissions', () => {
      expect(props.getAllFormSubsByUser).not.toBeCalled();
    });

    it('doesnt call getAllFormSubsByUser with view_all and view_others authorities', () => {
      props.user.authorities = [permissions.VIEW_ALL_SUBMISSIONS, permissions.VIEW_OTHERS_SUBMISSIONS];
      component = shallow(<FormSubmissionsAccordion {...props} />);
      expect(props.getAllFormSubsByUser).not.toBeCalled();
    });

    it('doesnt call getAllFormSubsByUser with view_others, but not view_all authorities', () => {
      props.user.authorities = [permissions.VIEW_OTHERS_SUBMISSIONS];
      component = shallow(<FormSubmissionsAccordion {...props} />);
      expect(props.getAllFormSubsByUser).not.toBeCalled();
    });

    it('does call getAllFormSubsByUser with view_all, but not view_others authorities', () => {
      props.user.authorities = [permissions.VIEW_ALL_SUBMISSIONS];
      component = shallow(<FormSubmissionsAccordion {...props} />);
      expect(props.getAllFormSubsByUser).toBeCalled();
    });
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

  describe('componentWillUnmount', () => {
    it('should call dispatchType', () => {
      component.unmount();
      expect(props.dispatchType).toBeCalledWith(CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS);
      expect(props.dispatchType).toBeCalledWith(CLEAR_GET_ALL_FORMS_BY_USER_STATUS);
    });
  });
});
