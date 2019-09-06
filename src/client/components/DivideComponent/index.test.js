import React from 'react';
import { shallow, mount } from 'enzyme';
import { DivideComponent } from './';

describe('DivideComponent', () => {
    const props = { executeDivision: jest.fn(), divideResult: { value: 'test' } };
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(<DivideComponent {...props} />);
    });

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Division:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should by default disable the submit button but not the inputs', () => {
        expect(component.find('button').not('input').props().disabled).toBeTruthy();
    });

    it('should render two inputs and a button', () => {
        const component = mount(<DivideComponent {...props} />);
        expect(component.find('input').not('button').length).toEqual(2);
        expect(component.find('button').not('input').length).toEqual(1);
    });

    describe('submit', () => {
        let component;

        beforeEach(() => {
            component = mount(<DivideComponent {...props} />);
        });

        it('should not call the action if val2 is 0', () => {
            const val1 = 7;
            const val2 = 0;
            component.find('input').at(0).simulate('change', { target: { value: val1 } });
            component.find('input').at(1).simulate('change', { target: { value: val2 } });
            component.find('button').simulate('click');
            expect(props.executeDivision).not.toHaveBeenCalled();
        });

        it('should call the action when submitting', () => {
            const val1 = 3;
            const val2 = 4;
            component.find('input').at(0).simulate('change', { target: { value: val1 } });
            component.find('input').at(1).simulate('change', { target: { value: val2 } });
            component.find('button').simulate('click');
            expect(props.executeDivision).toBeCalledWith(val1, val2);
        });
    });
});
