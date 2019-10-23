import React from 'react';
import { LogInPage } from '../../containers';
import { shallow } from 'enzyme';
import { LogIn } from '../../components';

describe('LogInPage', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<LogInPage />);
    expect(wrapper.find(LogIn).length).toEqual(1);
  });
});
