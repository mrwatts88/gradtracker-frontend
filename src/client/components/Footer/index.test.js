import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './';

describe('Footer', () => {
    const component = shallow(<Footer />);
    it('should render the component without crashing', () => {
        expect(component.find('footer').length).toEqual(1);
    });
});
