import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { PrivateRoute } from './';
import { PrivateRoute as ConnectedPrivateRoute } from '../../components';
import { Route, MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

describe('PrivateRoute', () => {
    const PrivateComponent = () => null;
    const props = { component: PrivateComponent, path: '/private' };
    let wrapper;

    it('should render the component without crashing', () => {
        wrapper = shallow(<PrivateRoute {...props} />);
        expect(wrapper.find(Route).length).toEqual(1);
    });

    it('should render the component passed as a prop if there is a token in local storage', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/private']}>
                <PrivateRoute {...props} currentUser={true} />
            </MemoryRouter>
        );

        expect(wrapper.find(PrivateComponent).length).toEqual(1);
    });

    it('should render a Redirect passed as a prop if there is a NOT token in local storage', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/private']}>
                <PrivateRoute {...props} />
            </MemoryRouter>
        );

        expect(wrapper.find(PrivateComponent).length).toEqual(0);
        expect(wrapper.find('Router').prop('history').location.pathname).toEqual('/login');
    });
});
