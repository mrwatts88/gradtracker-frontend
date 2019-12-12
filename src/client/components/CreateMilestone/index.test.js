import React from 'react';
import { CreateMilestone } from '.';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import { mount } from 'enzyme';

describe('CreateMilestone', () => {
  let component;
  const store = configureStore();

  const props = {
    milestones: {
      degreeProgramStates: [{ id: 1, name: 'test', description: 'testing' }, { id: 2, name: 'test2', description: 'testing2' }]
    },
    postMilestone: jest.fn(),
    getAllMilestones: jest.fn(),
  };

  beforeEach(() => {
    // Testing with shallow will render C component with props
    component = mount(<Provider store={store}><CreateMilestone {...props} /></Provider>);
  });

  it('should render component', () => {
    // in this case div needed an id since there are multiple div's in component
    expect(component.find('div#create-milestone').length).toEqual(1);
  });

  it('should getAllMilestones when component mounts', () => {
    // actions calls on mount should be tested
    expect(props.getAllMilestones).toHaveBeenCalled();
  });

  it('should render form', () => {
    // should check if the form was rendered
    expect(component.find('Form').length).toEqual(1);
  });

  it('should render input fields', () => {
    // should check if the correct input fields were rendered
    expect(component.find('input[name="name"]').length).toEqual(1);
    expect(component.find('input[name="description"]').length).toEqual(1);
  });

  it('should render submit button', () => {
    // should always check for submit buuton in the form
    expect(component.find('Button').length).toEqual(1);
    expect(component.find('button > span').text()).toEqual('Create Milestone');
  });

  it('should handle submit', () => {
    // submit functionality should be tested in the form
    component.find('input[name="name"]').simulate('change', { target: { value: 'Testing' } });
    component.find('input[name="description"]').simulate('change', { target: { value: 'Test' } });
    component.find('form').simulate('submit');
    expect(props.postMilestone).toHaveBeenCalled();
    expect(props.getAllMilestones).toHaveBeenCalled();
  });

  it('should render milestones', () => {
    // should check if milestones are rendered
    expect(component.find('div#test-1').length).toEqual(1);
    expect(component.find('div#test2-2').length).toEqual(1);
  });

  // shoull also test delete function for milestones
});
