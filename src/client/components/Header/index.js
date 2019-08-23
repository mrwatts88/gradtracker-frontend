import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="/" target="_self">Wordplay</a>
                    <a href="/calculator" target="_self">Calculator</a>
                    <a href="/about" target="_self">About</a>
                </nav>
            </header>
        );
    }
}
