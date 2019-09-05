import React from 'react';
import { shallow } from 'enzyme';
import { CalculationInputFields } from './';

describe('CalculationInputFields', () => {
    const props = {
        val1: '',
        val2: '',
        setVal1: jest.fn(),
        setVal2: jest.fn()
    };
    const component = shallow(<CalculationInputFields {...props} />);

    it('should render component', () => {
        expect(component.find('div.input-group-2').length).toEqual(1);
    });

    it('should render two inputs', () => {
        expect(component.find('input').length).toEqual(2);
    });

    it('should handle change for val1', () => {
        const val1 = 3;
        component.find('input').at(0).simulate('change', { target: { value: val1 } });
        expect(props.setVal1).toHaveBeenCalled();
    });

    it('should handle change for val2', () => {
        const val2 = 4;
        component.find('input').at(1).simulate('change', { target: { value: val2 } });
        expect(props.setVal2).toHaveBeenCalled();
    });
});
