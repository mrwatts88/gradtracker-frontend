import React from 'react';
import { shallow } from 'enzyme';
import { ShowError } from './';

describe('ShowError', () => {
    const props = { error: 'test', deleteError: jest.fn() };
    const component = shallow(<ShowError {...props} />);

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
