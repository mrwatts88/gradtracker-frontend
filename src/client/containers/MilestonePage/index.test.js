import React from 'react';
import { MilestonesPage } from '../../containers';
import { shallow } from 'enzyme';
import { Milestones } from '../../components';

describe('MilestonePage', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<MilestonesPage />);
    expect(wrapper.find(Milestones).length).toEqual(1);
  });
});
