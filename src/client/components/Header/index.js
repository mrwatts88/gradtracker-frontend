import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Wordplay</Link>
                    <Link to="/forms">Forms</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Log In</Link>
                </nav>
            </header>
        );
    }
}
