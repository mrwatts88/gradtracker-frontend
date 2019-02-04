import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './';

describe('Footer', () => {
    const component = shallow(<Header />);
    it('should render the component without crashing', () => {
        expect(component.find('header').length).toEqual(1);
    });
});
