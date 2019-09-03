import React from 'react';

const SLACK_URL = 'https://nm-de-capstone.slack.com';

export const Footer = () => {
    return (
        <footer>
            <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">Contact us!</a>
        </footer>
    );
};
