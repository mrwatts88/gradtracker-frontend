import React from 'react';
import { shallow } from 'enzyme';
import { SquareRootComponent } from './';

describe('SquareRootComponent', () => {
    const props = { executeSquare: jest.fn(), squareResult: { value: 'test' } };
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(<SquareRootComponent {...props} />);
    });

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Square Root:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should by default disable the submit button but not the inputs', () => {
        expect(component.find('button').not('input').props().disabled).toBeTruthy();
    });

    it('should render one input and a button', () => {
        expect(component.find('input').length).toEqual(1);
        expect(component.find('button').length).toEqual(1);
    });

    it('should call the action when submitting', () => {
        const val = 3;
        component.find('input').simulate('change', { target: { value: val } });
        component.find('button').simulate('click');
        expect(props.executeSquare).toBeCalledWith(val);
    });
});
