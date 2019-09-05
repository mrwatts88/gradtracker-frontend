import React from 'react';
import { shallow } from 'enzyme';
import { Concatenation } from './';

describe('Concatenation', () => {
    const props = { createConcatenation: jest.fn() };
    const component = shallow(<Concatenation {...props} />);

    it('should render the component without crashing', () => {
        expect(component.find('h3').text()).toEqual('Concatenation:');
    });

    it('should by default disable the submit button', () => {
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('should render result div', () => {
        expect(component.find('div.result-container').length).toEqual(1);
    });

    describe('Changing the state', () => {
        const component = shallow(<Concatenation {...props} />);

        it('should enable the button if a value is entered', () => {
            component.find('#value1').simulate('change', { target: { value: 'test1' } });
            component.find('#value2').simulate('change', { target: { value: 'test2' } });
            expect(component.find('button').props().disabled).toBeFalsy();
        });

        // value1 and value2 are set in the test above. this is a dependency!
        it('should call the action when submitting', () => {
            component.find('button').simulate('click');
            expect(props.createConcatenation).toBeCalledWith('test1', 'test2');
        });
    });

    describe('result', () => {
        const newProps = {
            ...props,
            concatValue: 'test1test2'
        };
        const component = shallow(<Concatenation {...newProps} />);

        it('should render result', () => {
            expect(component.find('p').text()).toContain(newProps.concatValue);
        });
    });
});
