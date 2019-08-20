import React from 'react';
import { shallow } from 'enzyme';
import { ShowError } from './';

describe('ShowError', () => {
    const props = { error: 'test', deleteError: jest.fn() };
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(<ShowError {...props} />);
    });

    it('should render component', () => {
        expect(component.find('h1').length).toEqual(1);
    });

    it('should deleteError onClick', () => {
        component.find('span').simulate('click');
        expect(props.deleteError).toHaveBeenCalled();
    });

    it('should not render component if there is no error', () => {
        const component = shallow(<ShowError />);
        expect(component.find('h1').length).toEqual(0);
    });
});
