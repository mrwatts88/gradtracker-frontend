import React from 'react';
import { shallow } from 'enzyme';
import { SquareComponent } from './';

describe('SquareComponent', () => {
    const props = { executeSquare: jest.fn(), squareResult: { value: 'test' }};
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(< SquareComponent {...props} />);
    });

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Square Root:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should render two inputs and a button', () => {
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
