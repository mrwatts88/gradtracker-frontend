import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Wordplay</Link>
                    <Link to="/calculator">Calculator</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signin">Sign In</Link>
                </nav>
            </header>
        );
    }
}
