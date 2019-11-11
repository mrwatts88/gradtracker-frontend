import * as React from 'react';
import { CreateMilestone } from '.';
import { shallow } from 'enzyme';

describe('CreateMilestone', () => {
  let component;

  const props = {
    handleSubmit: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<CreateMilestone {...props} />);
  });

  it('renders', () => {
    expect(component.find('div').length).toEqual(1);
  });
});
