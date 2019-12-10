import React from 'react';
import { CreateMilestone } from '.';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import { mount } from 'enzyme';

describe('CreateMilestone', () => {
  let component;
  const store = configureStore();

  const props = {
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
});
