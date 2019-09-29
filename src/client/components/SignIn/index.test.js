import React from 'react';
import { WrappedSignIn } from '../../components/SignIn';
import { shallow } from 'enzyme';

describe('SignIn', () => {
    it('renders without crashing', () => {
        shallow(<WrappedSignIn />);
    });
});
