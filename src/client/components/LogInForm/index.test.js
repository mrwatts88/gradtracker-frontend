import React from 'react';
import { LogInForm, L } from '.';
import { shallow, mount } from 'enzyme';
import { Form } from 'antd';

describe('LogInForm', () => {
    let wrapper;

    const props = {
        logIn: jest.fn()
    };

    it('renders without crashing', () => {
        wrapper = shallow(<LogInForm {...props} />);
    });

    describe('form onSubmit', () => {
        it('calls calls validateFields', () => {
            const mockValidateFields = jest.fn();
            const event = { preventDefault: jest.fn() };
            wrapper = shallow(<LogInForm />);

            wrapper.props().form.validateFields = mockValidateFields;
            wrapper.dive().find(Form).prop('onSubmit')(event);
            expect(event.preventDefault).toBeCalled();
            expect(mockValidateFields).toBeCalled();
        });

        it('calls calls validateEmailPassword', () => {
            const mockValidateEmailPassword = jest.fn();
            const event = { preventDefault: jest.fn() };
            wrapper = mount(<LogInForm />);

            const component = wrapper.find(L);
            component.instance().validateEmailPassword = mockValidateEmailPassword;
            component.find(Form).prop('onSubmit')(event);
            expect(event.preventDefault).toBeCalled();
            expect(mockValidateEmailPassword).toBeCalled();
        });
    });

    describe('validateEmailPassword', () => {
        it('calls logIn', () => {
            wrapper = shallow(<LogInForm {...props} />);
            wrapper.dive().instance().validateEmailPassword(undefined, 'test_email@gmail.com', 'test_password');
            expect(props.logIn).toBeCalled();
        });

        it('doesnt call login if there is an error', () => {
            wrapper = shallow(<LogInForm {...props} />);
            wrapper.dive().instance().validateEmailPassword('error', 'test_email@gmail.com', 'test_password');
            expect(props.logIn).toBeCalled();
        });
    });
});
