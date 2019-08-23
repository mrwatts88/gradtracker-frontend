import React from 'react';
import { shallow } from 'enzyme';
import { About } from './';

describe('About', () => {
    const component = shallow(<About />);

    it('should render component', () => {
        expect(component.find('main').length).toEqual(1);
    });

    it('should render correct title', () => {
        expect(component.find('h1').text()).toEqual('About Us');
    });
});
