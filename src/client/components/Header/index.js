import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log In</Link>
                </nav>
            </header>
        );
    }
}
