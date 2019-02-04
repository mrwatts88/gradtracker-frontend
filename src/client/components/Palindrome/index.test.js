import React from 'react';
import { shallow } from 'enzyme';
import { Palindrome } from './';

describe('Palindrome', () => {
    const props = { checkPalindrome: jest.fn() };
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(< Palindrome {...props} />);
    });

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Palindrome:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should enable the button if a value is entered', () => {
        component.find('#value').simulate('change', { target: { value: 'test' } });
        expect(component.find('button').props().disabled).toBeFalsy();
    });

    it('should call the action when submitting', () => {
        const val = 'test';
        component.setState({val});
        component.find('button').simulate('click');
        expect(props.checkPalindrome).toBeCalledWith(val);
    });
});
