import React from 'react';
import { MilestonesPage } from '..';
import { shallow } from 'enzyme';
import { CreateMilestone } from '../../components';

describe('MilestonePage', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<MilestonesPage />);
    expect(wrapper.find(CreateMilestone).length).toEqual(1);
  });
});
