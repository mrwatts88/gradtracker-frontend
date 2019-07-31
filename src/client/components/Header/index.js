import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <a href="#" target="_self">Home</a>
                    <a href="#" target="_self">Calculator</a>
                    <a href="#" target="_self">About</a>
                </nav>
            </header>
        );
    }
}
