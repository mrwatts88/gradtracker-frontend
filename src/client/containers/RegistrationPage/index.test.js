import React from 'react';
import { RegistrationPage } from '../../containers';
import { shallow } from 'enzyme';
import { Registration } from '../../components';

describe('RegistrationPage', () => {
    let wrapper;

    it('renders without crashing', () => {
        wrapper = shallow(<RegistrationPage />);
        expect(wrapper.find(Registration).length).toEqual(1);
    });
});
