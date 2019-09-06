import React from 'react';
import { shallow } from 'enzyme';
import CalculatorScreen from './';

describe('CalculatorScreen', () => {
    const component = shallow(<CalculatorScreen />);

    it('should render component', () => {
        expect(component.find('main').length).toEqual(1);
    });

    it('should render title', () => {
        expect(component.find('h1').text()).toContain('Calculations');
    });

    it('should render CalculationComponents', () => {
        expect(component.find('Connect(AddComponent)').length).toEqual(1);
        expect(component.find('Connect(SubtractComponent)').length).toEqual(1);
        expect(component.find('Connect(MultiplyComponent)').length).toEqual(1);
        expect(component.find('Connect(DivideComponent)').length).toEqual(1);
        expect(component.find('Connect(SquareRootComponent)').length).toEqual(1);
    });
});
