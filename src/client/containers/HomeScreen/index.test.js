import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './';

describe('HomeScreen', () => {
    const component = shallow(<HomeScreen />);

    it('should render component', () => {
        expect(component.find('main').length).toEqual(1);
    });

    it('should render title', () => {
        expect(component.find('h1').length).toEqual(1);
        expect(component.find('h1').text()).toContain('Words');
    });

    it('should render description', () => {
        expect(component.find('h3').length).toEqual(1);
        expect(component.find('p').length).toEqual(1);
    });
});
