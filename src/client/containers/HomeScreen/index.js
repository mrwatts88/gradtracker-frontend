import React, { Component } from 'react';

const DESCRIPTION = `The two "cards" below demonstrate the use of redux in an application.
Concatenating fires off an action that sends a GET to the backend service.
The response is handled and using a reducer we are setting the global state.
This is picked up in the "connected" component and triggers the rerender for that element`;

export class HomeScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{`Let's Mess With Words`}</h1>
                <section>
                    <h3>What is happening here?</h3>
                    <p style={{ whiteSpace: 'pre-line', paddingBottom: '1em' }}>{DESCRIPTION}</p>
                </section>
            </React.Fragment>
        );
    }
}

export default HomeScreen;
