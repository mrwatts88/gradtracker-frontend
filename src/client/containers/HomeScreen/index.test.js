import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './';

jest.mock('../../img/nm.jpg', () => { });
jest.mock('../../img/campus.jpg', () => { });
jest.mock('../../img/collab.jpg', () => { });
jest.mock('../../img/dog.jpg', () => { });

describe('HomeScreen', () => {
  const component = shallow(<HomeScreen />);

  it('should render title', () => {
    expect(component.find('h1').length).toEqual(1);
    expect(component.find('h1').text()).toContain('UWM');
  });
});
