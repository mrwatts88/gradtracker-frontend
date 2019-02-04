import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Palindrome, Concatenation } from '../../components';

const DESCRIPTION = `The two "cards" below demonstrate the use of redux in an application.
Checking the palindrome and concatenating fire off an action that sends a GET to the backend service.
The response is handled and using a reducer we are setting the global state.
This is picked up in the "connected" component and triggers the rerender for that element`;

class HomeScreen extends Component {
    render() {
        return (
            <main>
                <h1>Home Screen example</h1>
                <section>
                    <h3>What is happening here?</h3>
                    <p style={{whiteSpace: 'pre-line', paddingBottom: '1em'}}>{DESCRIPTION}</p>
                </section>
                <Palindrome />
                <Concatenation />
            </main>
        );
    }
}

export default connect()(HomeScreen);
