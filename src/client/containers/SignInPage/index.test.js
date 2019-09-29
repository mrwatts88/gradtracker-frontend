import React from 'react';
import { SignInPage } from '../../containers';
import { shallow } from 'enzyme';

describe('SignInPage', () => {
    it('renders without crashing', () => {
        shallow(<SignInPage />);
    });
});
