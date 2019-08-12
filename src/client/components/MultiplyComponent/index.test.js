import React from 'react';
import { shallow } from 'enzyme';
import { MultiplyComponent } from './';
import { SSL_OP_NO_TLSv1_1, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

describe('MultiplyComponent', () => {
    const props = { executeMultiplication: jest.fn(), multiplyResult: { value: 'test' }};
    let component;

    // resetting the component here, to make sure that we always have a fresh state.
    // see the concatenation for a different way to do this.
    beforeEach(() => {
        component = shallow(< MultiplyComponent {...props} />);
    });

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Multiplication:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should render two inputs and a button', () => {
        expect(component.find('input').length).toEqual(2);
        expect(component.find('button').length).toEqual(1);
    });
    it('should call the action when submitting', () => {
        const val1 = 3;
        const val2 = 4;
        component.find('input').at(0).simulate('change', { target: { value: val1 } });
        component.find('input').at(1).simulate('change', { target: { value: val2 } });
        component.find('button').simulate('click');
        expect(props.executeMultiplication).toBeCalledWith(val1, val2);
    });
});
